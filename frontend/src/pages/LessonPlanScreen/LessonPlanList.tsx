import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LessonPlanList.css";
import CreateLessonPlanModal from "../../components/CreateLessonPlanModal/CreateLessonPlanModal";
import { ModalEditLessonPlan } from "../../components/ModalEditLessonPlan/ModalEditLessonPlans";

interface LessonPlan {
  lesson_plan_id: number;
  title: string;
  description: string;
}

const LessonPlanList: React.FC = () => {
  const [lessonPlans, setLessonPlans] = useState<LessonPlan[]>([]);
  const [selectedPlans, setSelectedPlans] = useState<{
    [key: number]: boolean;
  }>({});
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessonPlans = async () => {
      console.log("Fetching lesson plans...");
      try {
        const response = await axios.get("http://localhost:3000/lesson-plans", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("Lesson plans fetched successfully", response.data);
        setLessonPlans(response.data.lessonPlans || []);
      } catch (error) {
        console.error("Error fetching lesson plans:", error);
        setErrorMessage("Erro ao buscar planos de aula.");
      }
    };

    fetchLessonPlans();
  }, []);

  const handleAddNewPlan = async (
    newPlan: Omit<LessonPlan, "lesson_plan_id">
  ) => {
    console.log("Adding new lesson plan:", newPlan);
    try {
      const response = await axios.post(
        "http://localhost:3000/lesson-plan",
        newPlan,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("New lesson plan added:", response.data);
      setLessonPlans((prevPlans) => [...prevPlans, response.data.lessonPlan]);
      setOpenCreateModal(false);
    } catch (error) {
      console.error("Error adding lesson plan:", error);
      setErrorMessage("Não foi possível adicionar o plano de aula.");
    }
  };

  const handleDelete = async () => {
    const selectedIds = Object.keys(selectedPlans)
      .filter((id) => selectedPlans[Number(id)])
      .map(Number);

    if (!selectedIds.length) {
      alert("Selecione pelo menos um plano para deletar.");
      return;
    }

    if (
      !window.confirm("Tem certeza que deseja excluir os planos selecionados?")
    ) {
      return;
    }

    console.log("Deleting lesson plans with IDs:", selectedIds);
    try {
      await Promise.all(
        selectedIds.map((id) =>
          axios.delete(`http://localhost:3000/lesson-plan/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
        )
      );
      console.log("Lesson plans deleted successfully.");
      setLessonPlans((prevPlans) =>
        prevPlans.filter((plan) => !selectedIds.includes(plan.lesson_plan_id))
      );
      setSelectedPlans({});
    } catch (error) {
      console.error("Error deleting lesson plans:", error);
      setErrorMessage("Erro ao excluir os planos de aula.");
    }
  };

  const handleSaveEdit = async (editedPlan: LessonPlan) => {
    console.log("Saving edited lesson plan:", editedPlan);
    try {
      const response = await axios.put(
        `http://localhost:3000/lesson-plan/${editedPlan.lesson_plan_id}`,
        { title: editedPlan.title, description: editedPlan.description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Lesson plan edited successfully:", response.data);

      // Atualizando o estado com o novo plano de aula editado
      setLessonPlans((prevPlans) =>
        prevPlans.map((plan) =>
          plan.lesson_plan_id === editedPlan.lesson_plan_id
            ? {
                ...plan,
                title: editedPlan.title,
                description: editedPlan.description,
              }
            : plan
        )
      );
      setSelectedPlans([]);

      setOpenEditModal(false); // Fechar o modal após a edição
    } catch (error) {
      console.error("Error editing lesson plan:", error);
      setErrorMessage("Erro ao editar o plano de aula.");
    }
  };

  const handleCheckBoxChange = (id: number) => {
    console.log(`Toggling checkbox for plan ID: ${id}`);
    setSelectedPlans((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleModalOpen = (modalType: "create" | "edit") => {
    console.log(`Opening ${modalType} modal`);
    if (modalType === "create") {
      setOpenCreateModal(true);
    } else {
      // Garantir que apenas um plano esteja selecionado
      const selectedIds = Object.keys(selectedPlans).filter(
        (id) => selectedPlans[Number(id)]
      );

      if (selectedIds.length !== 1) {
        alert("Selecione apenas um plano para editar.");
        return;
      }

      // Encontrar o plano selecionado
      const selectedPlan = lessonPlans.find(
        (plan) => plan.lesson_plan_id === Number(selectedIds[0])
      );

      if (selectedPlan) {
        setOpenEditModal(true);
      } else {
        alert("Plano de aula não encontrado.");
      }
    }
  };

  const handleModalClose = (modalType: "create" | "edit") => {
    console.log(`Closing ${modalType} modal`);
    if (modalType === "create") {
      setOpenCreateModal(false);
    } else {
      setOpenEditModal(false);
      setSelectedPlans({})
    }
  };

  return (
    <div className="plan_list_content">
      <h2 className="h2_lesson_plan">Lista de Planos de Aula</h2>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="action-buttons">
        <button
          onClick={() => handleModalOpen("edit")}
          className="button_edit_lesson_plan"
        >
          Editar
        </button>
        <button onClick={handleDelete} className="button_delete_lesson_plan">
          Deletar
        </button>
        <button
          onClick={() => handleModalOpen("create")}
          className="button_create_lesson_plan"
        >
          Adicionar
        </button>
      </div>

      <table className="lesson-plan-table">
        <thead>
          <tr>
            <th></th>
            <th>Título</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {lessonPlans.length ? (
            lessonPlans.map((plan) => (
              <tr key={plan.lesson_plan_id}>
                <td>
                  <input
                    type="checkbox"
                    checked={!!selectedPlans[plan.lesson_plan_id]}
                    onChange={() => handleCheckBoxChange(plan.lesson_plan_id)}
                  />
                </td>
                <td>{plan.title}</td>
                <td>{plan.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                Nenhum plano de aula encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {openCreateModal && (
        <CreateLessonPlanModal
          onAdd={handleAddNewPlan}
          onClose={() => handleModalClose("create")}
        />
      )}

      {openEditModal && (
        <ModalEditLessonPlan
          onEdit={handleSaveEdit}
          onClose={() => handleModalClose("edit")}
          lessonPlan={
            // Se há apenas um plano selecionado, passamos esse plano para o modal
            Object.keys(selectedPlans).length === 1
              ? lessonPlans.find((plan) => selectedPlans[plan.lesson_plan_id])
              : null
          }
        />
      )}
    </div>
  );
};

export default LessonPlanList;

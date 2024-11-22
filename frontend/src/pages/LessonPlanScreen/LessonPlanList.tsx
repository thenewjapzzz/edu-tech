import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LessonPlanList.css";
import CreateLessonPlanModal from "../../components/CreateLessonPlanModal/CreateLessonPlanModal";
import { ModalEditLessonPlan } from "../../components/ModalEditLessonPlan/ModalEditLessonPlans";

const LessonPlanList = () => {
  const [lessonPlans, setLessonPlans] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState<{
    [key: number]: boolean;
  }>({});
  const [openModal, setOpenModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessonsPlan = async () => {
      try {
        const response = await axios.get("http://localhost:3000/lesson-plans", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response.data.lessonPlans);
        setLessonPlans(response.data.lessonPlans); // Acesse lessonPlans diretamente
      } catch (error) {
        console.error("Error fetching lesson plans", error);
        setError("Erro ao buscar planos de aula."); // Defina uma mensagem de erro
      }
    };
    fetchLessonsPlan();
  }, []);

  // Função para adicionar plano de aula
  const handleAddNewPlan = async (newPlan: {
    title: string;
    description: string;
  }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/lesson-plan",
        newPlan,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      const newLessonPlan = response.data.lessonPlan;
      if (newLessonPlan) {
        setLessonPlans((prevPlans) => [...prevPlans, newLessonPlan]);
      } else {
        console.error("Formato inesperado de resposta:", response.data);
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error adding lesson plan:", error);
    }
  };

  // Função para deletar plano de aula
  const handleDelete = async () => {
    const selectedIds = Object.keys(selectedPlans)
      .filter((id) => selectedPlans[Number(id)])
      .map((id) => Number(id));

    if (selectedIds.length === 0) {
      alert("Selecione pelo menos um plano para deletar.");
      return;
    }

    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir os planos selecionados?"
    );
    if (!confirmDelete) return;

    try {
      for (const id of selectedIds) {
        await axios.delete(`http://localhost:3000/lesson-plan/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      }
      const updatedPlans = lessonPlans.filter(
        (plan) => !selectedIds.includes(plan.lesson_plan_id)
      );
      setLessonPlans(updatedPlans);
      setSelectedPlans({});
    } catch (error) {
      console.error("Error deleting lesson plans:", error);
    }
  };

  // Função para editar plano de aula
  const handleSaveEdit = async (
    id: number,
    updatedPlan: { title: string; description: string }
  ) => {
    try {
      const response = await axios.put(
        `http://localhost:3000:/lesson-plan/${id}`,
        updatedPlan,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "aplication/json",
          },
        }
      );
      const updatedLessonPlan = response.data.lessonPlan;

      if (updatedLessonPlan) {
        setLessonPlans((prevPlans) => {
          prevPlans.map((plan) => {
            plan.lesson_plan_id === id ? updatedLessonPlan : plan;
          });
        });
      } else {
        console.error("Unexpected response format", response.data);
      }
      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating lesson plan", error);
    }
  };

  const handleEdit = () => {
    const selectedIds = Object.keys(selectedPlans).filter(
      (id) => selectedPlans[Number(id)]
    );

    if (selectedIds.length !== 1) {
      alert("Selecione apenas um plano para editar.");
      return;
    }

    setModalEdit(true);
  };

  // Função para selecionar checkbox
  const handleCheckBoxChange = (id: number) => {
    console.log(id);
    setSelectedPlans((prevSelectedPlans) => {
      const updatdSelection = { ...prevSelectedPlans };
      updatdSelection[id] = !prevSelectedPlans[id];
      return updatdSelection;
    });
  };

  const handleAddLessonPlan = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenEditModal = () => {
    setModalEdit(true);
  };

  const handleCloseEditModal = () => {
    setModalEdit(false);
  };

  return (
    <div className="plan_list_content">
      <h2 className="h2_lesson_plan">Lista de Planos de Aula</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="action-buttons">
        <button
          onClick={handleOpenEditModal}
          className="button_edit_lesson_plan"
        >
          Editar
        </button>
        <button onClick={handleDelete} className="button_delete_lesson_plan">
          Deletar
        </button>
        <button
          onClick={handleAddLessonPlan}
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
          {lessonPlans.length === 0 ? ( // Condicional para exibir mensagem se não houver planos
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                Nenhum plano de aula encontrado.
              </td>
            </tr>
          ) : (
            lessonPlans.map((plan) => (
              <tr key={plan.lesson_plan_id}>
                <td>
                  <input
                    type="checkbox"
                    checked={!!selectedPlans[plan.lesson_plan_id || false]}
                    onChange={() => handleCheckBoxChange(plan.lesson_plan_id)}
                  />
                </td>
                <td>{plan.title}</td>
                <td>{plan.description}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {openModal && (
        <CreateLessonPlanModal
          onAdd={handleAddNewPlan}
          onClose={handleCloseModal}
        />
      )}
      {modalEdit &&
        selectedPlans &&
        lessonPlans.some((plan) => selectedPlans[plan.lesson_plan_id]) && (
          <ModalEditLessonPlan
            onEdit={(updatedPlan) =>
              handleSaveEdit(
                lessonPlans.find((plan) => selectedPlans[plan.lesson_plan_id])
                  .lesson_plan_id,
                updatedPlan
              )
            }
            onClose={handleCloseEditModal}
            lessonPlan={lessonPlans.find(
              (plan) => selectedPlans[plan.lesson_plan_id]
            )}
          />
        )}
    </div>
  );
};

export default LessonPlanList;

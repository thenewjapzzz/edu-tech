import React, { useEffect, useState } from "react";
import axios from 'axios';
import './LessonPlanList.css';
import CreateLessonPlanModal from "../../components/CreateLessonPlanModal/CreateLessonPlanModal";

const LessonPlanList = () => {
    const [lessonPlans, setLessonPlans] = useState([]);
    const [selectedPlans, setSelectedPlans] = useState<{ [key: number]: boolean }>({});
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState<string | null>(null); // Estado para gerenciar erros

    useEffect(() => {
        const fetchLessonsPlan = async () => {
            try {
                const response = await axios.get('http://localhost:3000/lesson-plans', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                    },
                });
                setLessonPlans(response.data.lessonPlans); // Acesse lessonPlans diretamente
            } catch (error) {
                console.error("Error fetching lesson plans", error);
                setError("Erro ao buscar planos de aula."); // Defina uma mensagem de erro
            }
        };
        fetchLessonsPlan();
    }, []);

    const handleCheckboxChange = (id: number) => {
        setSelectedPlans((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleDelete = async () => {
        const selectedIds = Object.keys(selectedPlans)
            .filter(id => selectedPlans[Number(id)])
            .map(id => Number(id));
        
            try  {
                for (const id of selectedIds) {
                    await axios.delete(`http://localhost:3000/lesson-plan/${id}`, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        },
                    });
                }
                const updatedPlans = lessonPlans.filter(plan => !selectedPlans[plan.id]);
                setLessonPlans(updatedPlans);
                setSelectedPlans({});
            }catch (error) {
                console.log("Error deleting lesson plan", error)
            }
    };

    const handleEdit = () => {
        const selectedTitles = lessonPlans
            .filter(plan => selectedPlans[plan.id])
            .map(plan => plan.title);
        console.log("Editar os planos:", selectedTitles);
    };

    const handleAddLessonPlan = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleAddNewPlan = (newPlan: { title: string, description: string }) => {
        setLessonPlans((prevPlans) => [...prevPlans, { ...newPlan, id: Date.now() }]);
        handleCloseModal();
    };

    return (
        <div className="plan_list_content">
            <h2 className="h2_lesson_plan">Lista de Planos de Aula</h2>

            {error && <div className="error-message">{error}</div>} {/* Exibe mensagem de erro se houver */}

            <div className="action-buttons">
                <button onClick={handleEdit} className="button_edit_lesson_plan">
                    Editar
                </button>
                <button onClick={handleDelete} className="button_delete_lesson_plan">
                    Deletar
                </button>
                <button onClick={handleAddLessonPlan} className="button_create_lesson_plan">
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
                            <td colSpan={3} style={{ textAlign: 'center' }}>Nenhum plano de aula encontrado.</td>
                        </tr>
                    ) : (
                        lessonPlans.map(plan => (
                            <tr key={plan.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={!!selectedPlans[plan.id]}
                                        onChange={() => handleCheckboxChange(plan.id)}
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
                    onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default LessonPlanList;

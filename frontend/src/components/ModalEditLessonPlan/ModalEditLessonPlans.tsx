import { useState, useEffect } from "react";
import './ModalEditLessonPlan.css';

export const ModalEditLessonPlan = ({ onClose, onEdit, lessonPlan }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Atualiza o estado sempre que lessonPlan mudar
    useEffect(() => {
        if (lessonPlan) {
            setTitle(lessonPlan.title || "");
            setDescription(lessonPlan.description || "");
        }
    }, [lessonPlan]);

    // Verifica se a função onEdit está definida antes de chamar
    const handleEditClick = (e) => {
        e.preventDefault();

        if (title && description) {
            // Verifica se o lessonPlan está definido antes de passar os dados
            onEdit({ ...lessonPlan, title, description });
            onClose();
        } else {
            alert("Preencha todos os campos");
        }
    };

    // Se lessonPlan não estiver disponível, renderiza um conteúdo vazio ou um placeholder
    if (!lessonPlan) return null;

    return (
        <div className="edit_lesson_plan">
            <div className="content_edit">
                <h2>Editar Plano de Aula</h2>
                <form>
                    <input
                        type="text"
                        value={title}
                        placeholder="Edite o título do plano de aula"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        value={description}
                        placeholder="Edite a descrição"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="button_container_modal_lesson">
                        <button
                            className="lesson_plan_button_save_modal"
                            onClick={handleEditClick}
                        >
                            Salvar
                        </button>
                        <button
                            className="lesson_plan_button_close_modal"
                            onClick={onClose}
                        >
                            Fechar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

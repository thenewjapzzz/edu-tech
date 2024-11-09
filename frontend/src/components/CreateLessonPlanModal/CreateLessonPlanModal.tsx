import React, { useState } from "react";
import './CreateLessonPlanModal.css';

const CreateLessonPlanModal = ({ onClose, onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddClick = (e) => {
        e.preventDefault();

        if(title && description) {
            onAdd({ title, description });
            setTitle('');
            setDescription('');
        }else {
            alert("Preencha todos os campos")
        }
    };

    return (
        <div className="create_lesson_plan">
            <div className="content_create">
                <h2>Adicione um plano de aula</h2>
                <form>
                    <input 
                        type="text"
                        value={title}
                        placeholder="Digite título do plano de aula"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        value={description}
                        placeholder="Digite uma descrição"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className="button_container_modal_lesson">
                        <button  
                            className="lesson_plan_button_create_modal"
                            onClick={handleAddClick}
                        >
                            Adicionar
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

export default CreateLessonPlanModal;

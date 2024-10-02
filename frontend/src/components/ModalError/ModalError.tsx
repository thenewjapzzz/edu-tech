import React from "react";
import './ModalError.css';

const ModalError = ({ message, onclose }) => {
    return (
        <div className="modal_overlay">
            <div className="modal_content">
                <h2 className="error_login">Erro!</h2>
                <p>{message}</p>
                <button onClick={onclose}>Ok</button>
            </div>
        </div>
    );
};

export default ModalError;
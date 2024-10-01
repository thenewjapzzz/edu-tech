import React from "react";
import "./index.css";

export default function Login() {
    return (
        <div className="login_container">
            <div className="login_box">
                <div className="login_left">
                    <img 
                        src="/images/login.png"
                        alt="login"
                    />
                </div>
                <div className="login_right">
                    <h2>Login</h2>
                    <form>
                        <input type="email" placeholder="Digite seu E-mail" required />
                        <input type="password" placeholder="Digite sua senha" required />
                        <button className="button_login" type="submit">entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ModalError from "../../components/ModalLoginError/ModalError";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const [showModalError, setShowModalError] = useState(false);
  const navigate = useNavigate(); // Hook para redirecionar

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(""); // Limpa a mensagem de erro antes de fazer a requisição

    try {
      const response = await axios.post("http://localhost:3000/", {
        email,
        password,
      });

      const { token, user } = response.data;

      // Armazena o token no localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userRole", user.role);
      console.log("User Role:", user.role);
      console.log("Login successfully", user);

      // Redireciona dependendo do papel do usuário
      if (user.role === "teacher") {
        navigate("/dashboard-teacher");
      } else if (user.role === "student") {
        navigate("/student");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setErrorMessage("Invalid Credentials! Try again.");
          setShowModalError(true)
        } else {
            setErrorMessage("An unexpected error occurred. Please try again later.");
            setShowModalError(true);
          console.log("Error in login", error);
        }
      } else {
        setErrorMessage("Network error. Please check your connection");
        setShowModalError(true);
        console.log("Request error", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModalError = () => {
    setShowModalError(false);
  }

  return (
    <div className="login_container">
      <div className="login_box">
        <div className="login_left">
          <img src="/images/login.png" alt="login" />
        </div>
        <div className="login_right">
          <h2>Login</h2>
          {errorMessage && <div className="error_message">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="password_container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password_icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            <button
              className="button_login"
              type="submit"
              disabled={!email || !password || isSubmitting}
            >
              {isSubmitting ? <div className="spinner"></div> : "entrar"}
            </button>
          </form>
        </div>
      </div>
      {showModalError && <ModalError message={errorMessage} onclose={closeModalError} />}
    </div>
  );
}

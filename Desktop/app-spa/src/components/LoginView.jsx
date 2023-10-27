import "./LoginView.css";
import { Link } from "react-router-dom";

export const LoginView = () => {
  return (
    <div className="login-container">
      <h2 className="title">Iniciar Sesión</h2>
      <form className ='formContainer'>
        <div className="formGroup">
          <label className="label">
            Usuario:
          </label>
          <input className="input-field" type="text" />
        </div>
        <div className="formGroup">
        <label className="label">
          Contraseña:
        </label>
        <input className="input-field" type="password" />
        </div>
        <Link className="login-button" to="/main">
          Iniciar Sesión
        </Link>
      </form>
    </div>
  );
};

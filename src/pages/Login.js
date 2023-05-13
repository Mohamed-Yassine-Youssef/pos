import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Toast } from "react-bootstrap";
import { Context } from "../context/Context";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(false);

  const { dispatch } = useContext(Context);

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onChangeUserNameHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "login_start" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        {
          email,
          password,
        },
        config
      );

      console.log(data);

      console.log("login success");

      dispatch({ type: "login_success", payload: data });
      if (data.Role === "directeurMagasin") {
        window.location.href = "directeurMagasin/";
      } else if (data.Role === "caissier") {
        window.location.href = "caissiere/";
      } else if (data.Role === "responsableVente") {
        window.location.href = "/responsableDesVentes";
      } else if (data.Role === "vendeur") {
        window.location.href = "vendeur/";
      }
      // navigate("/home");
    } catch (error) {
      dispatch({ type: "login_failure" });
      setMessage(error.response.data.message);
      setErrors(true);
    }
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box" style={{ marginTop: -100 }}>
        <div className="login-logo">
          <b>IWARE</b>POS
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">
              Connectez-vous pour démarrer votre session.
            </p>
            {/* <form> */}
            <form className="form" role="form">
              <div className="form-group">
                <div className="input-group mb-3">
                  <input
                    onChange={onChangeUserNameHandler}
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="my_unique_id"
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    onChange={onChangePasswordHandler}
                    type="password"
                    className="form-control"
                    placeholder="Mot de passe"
                  />

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4"></div>

                  <div className="col-4">
                    <button
                      type="submit"
                      className="btn btn-dark "
                      onClick={submitHandler}
                    >
                      Connexion
                    </button>
                  </div>

                  <div className="col-4"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {errors && (
          <Toast delay={2000} autohide className="bg-danger text-white">
            <Toast.Body>
              L’adresse e-mail et le mot de passe que vous avez saisi(e) n’est
              pas associé(e) à un compte.
            </Toast.Body>
          </Toast>
        )}
      </div>
    </div>
  );
};
export default Login;

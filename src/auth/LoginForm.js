// import { Modal } from "bootstrap";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ErrorContext } from "../contexts/ErrorContext";

function LoginForm() {
  // const modalEl = useRef();
  // const [modal, setModal] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate();

  // const handleClickModal = () => {
  //   const modalObj = new Modal(modalEl.current);
  //   setModal(modalObj);
  //   modalObj.show();
  // };

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      await login(userName, password);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  // const closeModal = () => {
  //   modal.hide();
  // };

  return (
    <>
      <form className=" row gx-2 gy-3 " onSubmit={handleSubmitLogin}>
        <div className="col-12 ">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="col-12 ">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center pt-5">
          <button className="btn btn-outline-success" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
export default LoginForm;

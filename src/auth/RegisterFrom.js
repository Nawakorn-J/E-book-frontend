import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ErrorContext } from "../contexts/ErrorContext";

function RegisterForm() {
  const { signUp } = useContext(AuthContext);
  const { setError, setTrigger } = useContext(ErrorContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();

      await signUp({
        firstName,
        lastName,
        email,
        userName,
        password,
        confirmPassword,
      });
      navigate("/login");
      // closeModal();
    } catch (err) {
      console.log(err);
      // setError(err.response.data.message);
      setTrigger((prev) => !prev);
    }
  };
  return (
    <form
      className="row g-3 needs-validation"
      novalidate
      onSubmit={handleSubmitSignUp}
    >
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="User name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="ConfirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      {/* <div className="pt-3 d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-green text-4.5 h-9 shadow-none d-flex justify-content-center align-items-center tw-px-10"
          onSubmit={handleSubmitSignUp}
        > Sign Up
        </button>
      </div> */}
      <div className="d-flex justify-content-center pt-5">
        <button className="btn btn-outline-success " type="submit">
          SignUp
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;

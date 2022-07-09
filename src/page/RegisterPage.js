// import RegisterForm from "../auth/RegisterFrom";

import RegisterForm from "../auth/RegisterFrom";

function RegisterPage() {
  return (
    // <RegisterForm />

    <div className="container-fluid ">
      <div className="py-4">
        <h1>Register</h1>
      </div>

      <div className="container-fluid  d-flex justify-items-center gap-3 flex-column setWidth">
        <RegisterForm />
        {/* <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
          /> */}

        {/* <input
            type="text"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
          />

          <input
            type="text"
            className="form-control"
            placeholder="ConfirmPassword"
            aria-label="ConfirmPassword"
          />

          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
          />

          <input
            type="text"
            className="form-control"
            placeholder="PhoneNumber"
            aria-label="PhoneNumber"
          />

          <input
            type="text"
            className="form-control"
            placeholder="FirstName"
            aria-label="FirstName"
          />

          <input
            type="text"
            className="form-control"
            placeholder="LastName"
            aria-label="LastName"
          />*/}
      </div>
    </div>
  );
}

export default RegisterPage;

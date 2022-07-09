import LoginForm from "../auth/LoginForm";

function LoginPage() {
  return (
    <>
      <div className="container-fluid ">
        <div className="py-4">
          <h1>Login</h1>
        </div>

        <div className="container-fluid  d-flex justify-items-center gap-3 flex-column setWidth">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginPage;

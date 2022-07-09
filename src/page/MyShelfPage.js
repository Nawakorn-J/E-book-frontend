function MyShelfPage() {
  return (
    <>
      <nav>
        <div>
          <h1>MyShelfPage</h1>
        </div>
        <div className="d-flex flex-column py-5">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
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
          />

          <button className="btn btn-outline-success" type="submit">
            Login
          </button>
        </div>
      </nav>
    </>
  );
}

export default MyShelfPage;
// My self

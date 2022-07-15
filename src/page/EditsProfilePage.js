import React, { useEffect, useState } from "react";
import { userEditProfile } from "../api/editProfile";
import { useAuth } from "../contexts/AuthContext";

function EditsProfilePage() {
  // const { user } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // useEffect(() => {
  //   setFirstName(user.firstName);
  //   setLastName(user.lastName);
  // }, [user]);

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();

  //     await userEditProfile({ firstName, lastName });
  //   } catch (err) {
  //   } finally {
  //   }
  // };

  return (
    <form
      className="row g-3 needs-validation"
      novalidate
      // onSubmit={handleSubmit}
    >
      {/* <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="User name"
          // value={userName}
          // onChange={(e) => setUserName(e.target.value)}
        />
      </div> */}
      {/* <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="Email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
      </div> */}

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
          submit
        </button>
      </div>
    </form>
  );
}
export default EditsProfilePage;

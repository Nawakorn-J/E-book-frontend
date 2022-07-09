import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function HeaderLeft() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user && <p>{user.userName}</p>}
      <div>
        <Link className="text-dark mx-2" to="/register">
          Register
        </Link>
        <Link className="text-dark mx-2" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default HeaderLeft;

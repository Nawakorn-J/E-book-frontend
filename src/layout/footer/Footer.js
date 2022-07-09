import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="navbar bg-primary container-fluid py-3 ">
      <div className="container justify-content-end py-1">
        <Link className="text-dark mx-2" to="/contact">
          ContactUs
        </Link>
      </div>
    </nav>
  );
}

export default Footer;

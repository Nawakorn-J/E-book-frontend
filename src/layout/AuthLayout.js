import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function AuthLayout() {
  return (
    <>
      <Header />
      <div className="container-fluid min-vh-100 tw-pt-14">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AuthLayout;

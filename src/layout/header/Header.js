import CartIcon from "./CartIcon";
import HeaderLeft from "./HeaderLeft";
import Logo from "./Logo";
import SearchMenu from "./SearchMenu";

function Header() {
  return (
    <>
      <nav className="navbar  bg-primary  py-3 container-fluid ">
        <div className="container justify-content-between ">
          <HeaderLeft />
          <Logo />
          <div className="d-flex justify-content-end ">
            <CartIcon />
            <SearchMenu />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

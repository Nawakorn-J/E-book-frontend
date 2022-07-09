import defaultProfilePic from "../asset/image/image1.jpg";

function CartPage() {
  return (
    <nav className="d-flex flex-column gap-5">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="d-flex container-fluid bg-danger p-5 ">
        <div className="cartBox bg-danger ">
          <img src={defaultProfilePic} />
        </div>
        <div className="container bg-success px-5 d-flex flex-column  mx-4">
          <p>ชื่อหนังสือ</p>
          <div className="d-flex justify-content-end px-5 gap-5 ">
            <p>ราคา</p>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
      <div className=" cartTotalBox d-flex container-fluid bg-warning gap-5 ">
        <div className="container flex-column py-3 my-3  ">
          <p>รายการทั้งหมด</p>
          <p>รวมเป็นเงิน</p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-success" type="submit">
              submit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CartPage;

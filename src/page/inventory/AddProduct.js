import Pic from "../../asset/image/naruto.jpg";

function AddProduct() {
  return (
    <>
      <nav className="d-flex container-fluid  py-2 d-flex justify-content-center  ">
        <div className="w-50 d-flex justify-content-center py-2  ">
          <div className="addimageBox bg-danger border border ">
            <img src={Pic} />
          </div>
        </div>
      </nav>
      <div className="container-fluid d-flex justify-content-center  py-5 ">
        <p>ProductName</p>
        <input
          type="text"
          className="form-control"
          placeholder="ProductName"
          aria-label="Username"
        />
        <p>type</p>
        <input
          type="text"
          className="form-control"
          placeholder="type"
          aria-label="Username"
        />
        <p>publishing house</p>
        <input
          type="text"
          className="form-control"
          placeholder="publishing house"
          aria-label="Username"
        />
      </div>
      <div className="container-fluid d-flex justify-content-center ">
        <p>Category</p>
        <input
          type="text"
          className="form-control"
          placeholder="Category"
          aria-label="Username"
        />
        <p>Print length</p>
        <input
          type="text"
          className="form-control"
          placeholder="Print length"
          aria-label="Username"
        />
        <p>datetime</p>
        <input
          type="text"
          className="form-control"
          placeholder="datetime"
          aria-label="Username"
        />
      </div>
      <div className="m-3 container-fluid d-flex justify-content-center ">
        <p>title</p>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="container-fluid d-flex justify-content-center bg bg-danger">
        <i className="fa-solid fa-square-plus"></i>
        <p>Name book</p>
        <input type="text" className="form-control" />
        <p>price</p>
        <input type="text" className="form-control" />
        <p>title</p>
        <input type="text" className="form-control" />
      </div>
    </>
  );
}

export default AddProduct;

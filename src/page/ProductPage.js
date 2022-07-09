import defaultProfilePic from "../asset/image/image1.jpg";

function ProductPage() {
  return (
    <>
      <nav className="d-flex container-fluid  py-5 ">
        <div className="w-50 d-flex justify-content-center py-5">
          <div className="imagebox bg-danger border border ">
            <img src={defaultProfilePic} />
          </div>
        </div>

        <div className="d-flex gap-3 flex-column  d-flex justify-content-center setWidth">
          <h5>details</h5>
          <input
            type="text"
            className="form-control"
            placeholder="ProductName"
            aria-label="ProductName"
          />
          <input
            type="text"
            className="form-control"
            placeholder="type"
            aria-label="type"
          />
          <input
            type="text"
            className="form-control"
            placeholder="publishing house"
            aria-label="publishing house"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            aria-label="Category"
          />
          <input
            type="text"
            className="form-control"
            placeholder="datetime"
            aria-label="datetime"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Print length"
            aria-label="Print length"
          />
          <input
            type="text"
            className="form-control"
            placeholder="price"
            aria-label="price"
          />
          <div className="d-flex mb-3  justify-content-evenly">
            <button className="btn btn-success" type="submit">
              Login
            </button>
            <button className="btn btn-success" type="submit">
              Add To Cart
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ProductPage;

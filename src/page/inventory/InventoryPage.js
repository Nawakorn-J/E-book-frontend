import Pic from "../../asset/image/naruto.jpg";

function InventoryPage() {
  return (
    <div className="container-fluid  bg-danger ">
      <div className="container border border-dark  ">
        <div className="container addimageBox  ">
          <img src={Pic} />
          <p>title</p>
          <button className="btn btn-outline-success" type="submit">
            details
          </button>
        </div>
      </div>
    </div>
  );
}

export default InventoryPage;

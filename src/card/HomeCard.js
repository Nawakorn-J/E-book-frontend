import { Modal } from "bootstrap";
import { useRef } from "react";

function HomeCard(props) {
  const { product, onAdd, sel, onRemove } = props;
  const modalEl = useRef();

  const onDetailClick = () => {
    const modalObj = new Modal(modalEl.current);
    modalObj.show();
  };

  const handleClickAddProduct = () => {
    onAdd(product);
  };
  const handleClickRemoveClick = () => {
    onRemove(product);
  };
  return (
    // <div>
    //   <div className="cartBox   ">
    //     <p>{product.productName}</p>
    //     <img className="small" src={product.image} />
    //   </div>
    // </div>
    <>
      <div className="col py-3 border-bottom border-end rounded-3 ms-2 cartBox">
        <img className="small" src={product.image} alt={product.productName} />
        <div
          className={`fs-4 mt-2 ${
            sel && "bg-danger rounded bg-gradient bg-opacity-50 "
          }`}
        >
          {product.productName}
        </div>

        <div className="fs-5 text-dark text-opacity-80">
          amount:{product.amount}
        </div>
        <div>
          {sel && (
            <button
              className="btn btn-dark text-warning btn-sm"
              onClick={handleClickRemoveClick}
            >
              Remove
            </button>
          )}
          {!sel && (
            <button
              className="btn btn-dark btn-sm"
              onClick={handleClickAddProduct}
            >
              Add to Cart
            </button>
          )}
          <button className="btn btn-success btn-sm" onClick={onDetailClick}>
            Detail..
          </button>
        </div>
      </div>
      <div className="modal" tabIndex="-1" ref={modalEl}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Detail</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body bg-info">
              <h2>Product : {product.productName}</h2>
              <div>
                <img
                  className="small"
                  src={product.image}
                  alt={product.productName}
                />
                <p>category:{product.category}</p>
                <p>printLength:{product.printLength}</p>
                <p>amount:{product.amount}</p>
                <p>title:{product.title}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard;

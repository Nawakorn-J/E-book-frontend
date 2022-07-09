import { Modal } from "bootstrap";
import { useRef } from "react";

function Product(props) {
  const { product, onAdd, sel, onRemove } = props;
  const modalEl = useRef;

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
    <>
      <div className="col py-3 border-bottom border-end rounded-3 ms-2">
        <img className="small" src={product.image} alt={product.productName} />
        <div
          className={`fs-4 mt-2 ${
            sel && "bg-danger rounded bg-gradient bg-opacity-50"
          }`}
        >
          {product.name}
        </div>

        <div className="fs-5 text-light text-opacity-80">{product.price}</div>
        <div>
          {sel && (
            <button
              className="btn btn-light text-warning btn-sm"
              onClick={handleClickRemoveClick}
            >
              Remove
            </button>
          )}
          {!sel && (
            <button
              className="btn btn-light btn-sm"
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
              <h5 className="modal-title">Modal title</h5>
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

export default Product;

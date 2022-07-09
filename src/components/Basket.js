import React from "react";
import { checkOutMany, checkOutOne } from "../api/order";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  let itemAmounts = cartItems.reduce((a, c) => a + c.amount * c.qty, 0);

  let total = itemAmounts;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length > 1) {
      console.log(cartItems);

      const productId = cartItems.map((el) => el.id);
      const amount = cartItems.map((el) => el.amount);
      console.log(amount);
      let products = cartItems.map((el) => {
        let oneData = {
          productId: el.id,
          amount: +el.amount,
          quantity: el.qty,
        };
        return oneData;
      });
      let dat = { products: products };
      console.log(dat);
      // await checkOutMany({ products: products });
      await checkOutMany(dat);
      // console.log("OK checkout");
    } else {
      console.log(cartItems[0]);
      await checkOutOne(
        cartItems[0].id,
        cartItems[0].amount
        // cartItems[0].quantity
      );
    }
  };

  return (
    <aside className="col-4 rounded pt-3 pb-5 fs-5">
      <h2 className="fw-light fs-3 border p-2 rounded  mb-3">Cart Items</h2>
      <div> {cartItems.length === 0 && <div>Cart is Empty</div>} </div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-5">{item.productName}</div>
          <div className="col-3">
            <button
              className="btn btn-sm btn-outline-secondary me-1"
              onClick={() => onAdd(item)}
            >
              +
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => onRemove(item)}
            >
              -
            </button>
          </div>
          <div className="col text-end">
            {item.qty} x ${item.amount}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col">Items amount</div>
            <div className="col text-end">${itemAmounts.toFixed(2)}</div>
          </div>
          {/* <div className="row">
            <div className="col">Tax</div>
            <div className="col text-end">${tax.toFixed(2)}</div>
          </div> */}

          <div className="row fw-bold">
            <div className="col">Total</div>
            <div className="col text-end border rounded-3">
              ${total.toFixed(2)}
            </div>
          </div>
        </>
      )}
      <button onClick={handleSubmit}>submit</button>
    </aside>
  );
}

export default Basket;

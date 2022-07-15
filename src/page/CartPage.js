import axios from "../config/axios";
import { useEffect, useState } from "react";

import defaultProfilePic from "../asset/image/image1.jpg";
import { deleteOrderItem } from "../api/order";

function CartPage() {
  const [order, setOrder] = useState();

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await axios.get("/orders");
      setOrder(res.data.order);
      // console.log(res.data.order);
    };
    fetchOrder();
  }, []);
  console.log(order);

  const handledeleteOrderItems = async (id) => {
    try {
      await deleteOrderItem(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="d-flex flex-column gap-5">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="d-flex container-fluid border rounded bg-success p-5 ">
        <div className="cartBox border rounded ">
          <img src={defaultProfilePic} />
        </div>
        <div className="container bg-success rounded px-5 d-flex flex-column border rounded mx-4">
          <div className="d-flex  flex-column  justify-content-between px-5 gap-5 table-striped">
            <table className="table  table-hover   ">
              <tr>
                <td>Book Name</td>
                <td>Price</td>
              </tr>

              {order?.map((el) =>
                el.OrderItems?.map((element) => (
                  <tr>
                    <td> {element?.Product?.productName}</td>
                    <td>{element?.Product?.amount}</td>
                    <td>
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={handledeleteOrderItems}
                      />
                    </td>
                  </tr>
                ))
              )}
            </table>
          </div>
        </div>
      </div>
      <div className=" cartTotalBox d-flex container-fluid bg-warning border rounded gap-5 ">
        <div className="container flex-column  py-3 my-3  ">
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

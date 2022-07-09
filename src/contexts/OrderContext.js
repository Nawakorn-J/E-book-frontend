import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const fetchOrder = async () => {
  //     try {
  //       const res = await axios.get("/orders");
  //       setOrders(res.data);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchOrder();
  // }, []);

  return (
    <OrderContext.Provider value={{ orders }}>{children}</OrderContext.Provider>
  );
}

export default OrderContextProvider;
export { OrderContext };

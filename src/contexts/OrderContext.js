import axios from "../config/axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { checkOutMany } from "../api/order";
import { initOrder } from "../actions/orderAction";

const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [orders, dispatch] = useReducer([]);

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
  // useEffect(() => {
  //   const fetchOrder = async () => {
  //     try {
  //       const res = await checkOutMany();
  //       dispatch(initOrder(res.data.orders));
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

function useOrder() {
  const ctx = useContext(OrderContext);
  return ctx;
}

export { useOrder };

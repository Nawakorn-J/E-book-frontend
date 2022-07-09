import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

const CartContext = createContext;
function CartContextProvider() {
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const res = await axios.post("/cartItems");
        setCartItem(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCartItem();
  }, []);
  return <div>CartContext</div>;
}

export default CartContext;

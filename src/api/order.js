import axios from "../config/axios";

export const checkOutMany = async (products) => {
  await axios.post(`/orders`, { products });
};

export const checkOutOne = async (productId, amount, quantity) => {
  await axios.post(`/orders`, { productId, amount, quantity: "1" });
};

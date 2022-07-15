import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import CartPage from "../page/CartPage";
import MyShelfPage from "../page/MyShelfPage";
import PayMentPage from "../page/PayMentPage";
import ProductPage from "../page/ProductPage";

import InventoryPage from "../page/inventory/InventoryPage";
import Dashboard from "../page/inventory/Dashboard";
import AddProduct from "../page/inventory/AddProduct";
import Sidebar from "../sidebar/Sidebar";
import ContactUs from "../page/ContactUs";
import EditsProfilePage from "../page/EditsProfilePage";

function Router() {
  return (
    <Routes>
      <>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/editsProfile" element={<EditsProfilePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/myshelf" element={<MyShelfPage />} />
          <Route path="/payment" element={<PayMentPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/inventory" element={<Sidebar />}>
            <Route path="" element={<InventoryPage />} />
            <Route path="dashBoard" element={<Dashboard />} />
            <Route path="addProduct" element={<AddProduct />} />
          </Route>
        </Route>
      </>
    </Routes>
  );
}

export default Router;

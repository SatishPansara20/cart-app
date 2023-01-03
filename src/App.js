import React from "react";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterUser from "./pages/register/RegisterUser";
import Layout from "./components/Layout";
import ViewProduct from "./pages/product/ViewSingleProduct";
import EditProductInfo from "./pages/product/EditProductInfo";
import AddNewProduct from "./pages/product/AddNewProduct";
import CartPage from "./pages/cart/CartPage";
import CartShow from "./pages/cart/CartShow";
import PageNoteFound from "./components/PageNoteFound";



function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="*" element={<PageNoteFound />} />
        <Route element={<Layout />}>
          <Route exact path="/" element={<HomePage />} />
          <Route path="cartshow" element={<CartShow />} />
          <Route path="viewproduct/:id" element={<ViewProduct />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="addnewproduct" element={<AddNewProduct />} />
          <Route path="/editinfo/:id" element={<EditProductInfo />} />
        </Route>
      </Routes>

      {/* <A/> */}

    </React.Fragment>
  );
}

export default App;


//import UploadImage from "./features/product/UploadImage";

// import NavBar from "./features/Components/NavBar";
// <NavBar />;
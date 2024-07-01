import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProducrDetails/ProductDetails";
import Contact from "./components/Contact/Contact";
import AboutUS from "./components/AboutUs/AboutUS";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import CartShopping from "./components/CartShopping/CartShopping";
import Favourite from "./components/Favourite/Favourite";
import CheckOust from "./components/checkOut/CheckOust";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id/:cat" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carts" element={<CartShopping />} />
        <Route path="/fav" element={<Favourite />} />
        <Route path="/checkout" element={<CheckOust />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

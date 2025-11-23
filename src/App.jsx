'use client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";  
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const [location, setLocation] = useState(null);
    const [dropdown , setDropdown] = useState(false);

  const getLocation = async () => {
    if (!navigator.geolocation) {
      // console.log("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        // console.log("Latitude:", latitude, "Longitude:", longitude);

        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        try {
          const res = await axios.get(url);
          const exactLocation = res.data.address;
          console.log(exactLocation);
          setLocation(exactLocation);
          setDropdown(false)
        } catch (error) {
          console.log(error);
        }
      },
      // (err) => {
      //   console.log("Location error:", err.message);
      // }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} dropdown={dropdown} setDropdown={setDropdown} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;

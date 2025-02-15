import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import MainLayout from "./MainLayout";
import Allitems from "./Components/Allitemss"; // Fixed filename typo
import Cart from "./Cart";
import AboutUs from "./About-us";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>          <Route index element={<Navbar />} /> {/* Default child route */}

        {/* Main layout wrapping child routes */}
        <Route path="/" element={<MainLayout />}>
          <Route path="allitems" element={<Allitems />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

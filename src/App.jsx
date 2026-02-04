import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import MainHero from "./pages/MainHero";
import About from "./pages/About";
import NavAbout from "./pages/NavAbout";
import Card from "./pages/Card";

import Services from "./pages/Services";
import Footer from "./pages/Footer";
import AdminLogin from "./authantication/AdminLogin";
import AdminRegister from "./authantication/AdminRegister";
import UserRegister from "./authantication/UserRegister";
import UserLogin from "./authantication/UserLogin";
import AddCard from "./AddCardsdetails/AddCard";
import MainPage from "./pages/MainPage";
import Account from "./authantication/Account";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/login" element={<AdminLogin />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/card" element={<AddCard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<NavAbout />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

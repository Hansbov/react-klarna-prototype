import logo from './logo.svg';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Confimation from './components/Confirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* Public routes */}
      <Route path="" element={<Home />} />
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="thankyou/:order_id" element={<Confimation/>}/>


    </Route>
    </Routes>
  );
}

export default App;

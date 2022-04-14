import logo from './logo.svg';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SelectView from './view/SelectView';
import Checkout from './components/Checkout';
import Confimation from './components/Confirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* Public routes */}
      <Route path="" element={<SelectView />} />
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="thankyou/:order_id" element={<Confimation/>}/>


    </Route>
    </Routes>
  );
}

export default App;

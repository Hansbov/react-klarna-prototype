import logo from './logo.svg';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SelectView from './view/SelectView';
import Presenter from './components/Presenter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* Public routes */}
      <Route path="" element={<SelectView />} />
      <Route path="pres" element={<Presenter/>}/>

    </Route>
    </Routes>
  );
}

export default App;

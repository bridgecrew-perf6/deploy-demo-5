import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from "./components/Navbar";
import DoubleDelux from "./pages/DoubleDelux";
import FamilyDelux from "./pages/FamilyDelux";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/rooms" element={<Rooms/>}/>
        <Route exact path="/rooms/double-deluxe" element={<DoubleDelux/>}/>
        <Route exact path="/rooms/family-deluxe" element={<FamilyDelux/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  );
}

export default App;

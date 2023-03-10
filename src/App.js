import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userlist from "./components/Userlist";
import EmpCreate from "./components/EmpCreate";
import EmpDetail from "./components/EmpDetail";
import EmpEdit from "./components/EmpEdit";



function App() {
  return (
    <div className="App">
            <BrowserRouter>
            <Routes>
              <Route path="/userlist" element={<Userlist/>}></Route>
              <Route path="/employee/create" element={<EmpCreate/>}></Route>
              <Route path="/employee/detail/:empid" element={<EmpDetail/>}></Route>
              <Route path="/employee/edit/:empid" element={<EmpEdit/>}></Route>
               
            </Routes>
            </BrowserRouter>
     </div>
  );
}

export default App;

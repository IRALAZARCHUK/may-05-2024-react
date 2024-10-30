import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div>
     <Menu/>
      <hr/>
      <Outlet/>
    </div>
  );
}

export default App;

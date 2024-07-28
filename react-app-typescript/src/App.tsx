import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { MyFun } from './TestTs';
// import { ReactComponent as Logo } from './images/svg/home.svg';

import HomePage from './pages/home/Home.page';
import TablePage from './pages/table/Table.page';

function App() {
  useEffect(() => {
    MyFun();
  }, []);
  return (
    <div className="container">
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/table" element={<TablePage/>} />
       </Routes>
    </div>
  );
}

export default App;

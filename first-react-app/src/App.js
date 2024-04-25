
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Sorting from './pages/sorting/Sorting';
// NVM DOWNLOAD LINK: https://github.com/coreybutler/nvm-windows/releases

function App() {


  return (
    <div className="main-app">
      <div>
        <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Sorting/>} path="/sort" />
        </Routes>
      </div>
    </div>
  );
}

export default App;

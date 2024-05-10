
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Sorting from './pages/sorting/Sorting';
import SortingTable from './pages/sortingTable/SortingTable';
import HooksPage from './pages/hooks/Hooks.page';
// NVM DOWNLOAD LINK: https://github.com/coreybutler/nvm-windows/releases

function App() {
  return (
    <div className="main-app">
      <div>
        
        <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Sorting/>} path="/sort" />
        <Route element={<SortingTable/>} path="/sort-table" />
        <Route element={<HooksPage/>} path="/hooks" />
        </Routes>
      </div>
    </div>
  );
}

export default App;

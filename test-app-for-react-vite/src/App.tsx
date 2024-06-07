import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from './pages/home/Home.page';
import AppHeader from "./shared/components/AppHeader";
import SideNav from "./shared/components/SideNav";

function App() {
  return (
    <>
      <SideNav>
        {/* <AppHeader /> */}
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </SideNav>
    </>
  )
}

export default App

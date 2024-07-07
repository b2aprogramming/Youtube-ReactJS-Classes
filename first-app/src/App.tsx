import './App.scss';
import DashboardPage from './pages/dashboard/DashboardPage';
import LearningPage from './pages/learning/Learning.page';
import StudentsPage from './pages/students/StudentsPage';
import AppDrawer from './shared/components/appDrawer/AppDrawer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AppDrawer>
       <Routes>
          <Route path="/" element={<DashboardPage/>} />
          <Route path="/students" element={<StudentsPage/>} />
          <Route path="/learning" element={<LearningPage/>} />
       </Routes>
    </AppDrawer>
  );
}

export default App;

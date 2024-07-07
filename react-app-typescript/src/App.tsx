import React, { useEffect } from 'react';
import './App.css';
import { MyFun } from './TestTs';
// import { ReactComponent as Logo } from './images/svg/home.svg';
import Logo from './images/svg/home.svg';
import TestForm from './shared/components/testForm';

function App() {
  useEffect(() => {
    MyFun();
  }, []);
  return (
    <div className="container">
        <h1>My TS App</h1>
        <div>
         {/* <img src="./assets/images/users.png" alt="Home Icon" /> */}
         {/* <img src={Logo} alt="Home Icon" /> */}
         {/* <Logo /> */}

         <TestForm/>
        </div>
    </div>
  );
}

export default App;

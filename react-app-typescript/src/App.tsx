import React, { useEffect } from 'react';
import './App.css';
import { MyFun } from './TestTs';
// import { ReactComponent as Logo } from './images/svg/home.svg';
import Logo from './images/svg/home.svg';

function App() {
  useEffect(() => {
    MyFun();
  }, []);
  return (
    <div className="App">
        <h1>My TS App</h1>
        <div>
         <img src="./assets/images/users.png" alt="Home Icon" />
         <img src={Logo} alt="Home Icon" />
         {/* <Logo /> */}
        </div>
    </div>
  );
}

export default App;

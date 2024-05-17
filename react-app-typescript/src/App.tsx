import React, { useEffect } from 'react';
import './App.css';
import { MyFun } from './TestTs';

function App() {
  useEffect(() => {
    MyFun();
  }, []);
  return (
    <div className="App">
        <h1>My TS App</h1>
    </div>
  );
}

export default App;

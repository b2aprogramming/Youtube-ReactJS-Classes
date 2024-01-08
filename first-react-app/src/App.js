
import { useState } from 'react';
import './App.css';
import TestBind from './TestBinding';
import DataList from './DataList';

// NVM DOWNLOAD LINK: https://github.com/coreybutler/nvm-windows/releases

function App() {

  // const state1 = useState('Hello Worl');
  const [name, chagneName] = useState('Hello World');
  //var name = 'Bhagath';

  function changeText(evt) {
   
    // name = evt.target.value;
    // console.log(name);
    chagneName(evt.target.value);
  }

  return (
    <div className="App">
      {/* <h1>Hi Data sag</h1> */}
      <div>
          <input type="text" onChange={changeText} />
      </div>
      <div>
        {/* {state1[0]} */}
        {name}
      </div>
      <div className="test-binding">
        <TestBind/>
      </div>
      <div className="data-list">
        <DataList/>
      </div>
    </div>
  );
}

export default App;

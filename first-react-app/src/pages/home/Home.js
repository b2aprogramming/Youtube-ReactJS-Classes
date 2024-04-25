import { useState } from 'react';
import TestBind from '../../TestBinding';
import DataList from '../../DataList';
import TodoLost from '../../components/TodoList';
import TodoList2 from '../../components/TodoList2';
import CardComponent from '../../components/CardComponent';

function Home(){
    
  // const state1 = useState('Hello Worl');
  const [name, chagneName] = useState('Hello World');
  const [cardTitle] = useState('Card 1 test');
  const [isOpen, setOpen] = useState(false);
  const [counter, setCounter] = useState(1);
  //var name = 'Bhagath';

  function changeText(evt) {
   
    // name = evt.target.value;
    // console.log(name);
    chagneName(evt.target.value);
  }

  const showHideCard =() => {
    setOpen((prev) => {
      return !prev;
    })
  };

  const increaseCount =() => {
    setCounter((prev) => {
      return prev + 1;
    })
  };

  const onCardClick = function() {
    console.log('@@ card click');
  }

    return (
        <div>
            <h1>Home page</h1>
            {/* <h1>Hi Data sag</h1> */}
      <div>
        
        <button onClick={showHideCard}>Show/Hide Card</button>
        <div>
          <button onClick={increaseCount}>Increase count</button>
          {isOpen && <CardComponent title={cardTitle} subTitle={'Sub title test'} counter={counter} cardClick={onCardClick} />}
          
        </div>
      </div>
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

      <div>
        <h2>Todo List</h2>
        <div>
          <TodoLost/>
        </div>
      </div>
      <div>
        <h2>Todo List 2</h2>
        <div>
          <TodoList2/>
        </div>
      </div>

        </div>
    );
}

export default Home;
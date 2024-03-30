import { useState } from "react";

function TodoLost() {
    const [todo, setTodo] = useState([
        {name: 'test name', id: 1}
    ]);

    const [txt, setText] = useState('');
    const [editedValue, setEditedValue] = useState(null);

    const changeInput = (evt) => {
        setText(evt.target.value);
    };

    const addToList = () => {
        setTodo((prev)=> {
            const arr = [...prev];
            if(editedValue) {
                let ind = arr.findIndex(ele => ele.id === editedValue.id);
                arr[ind].name = txt;
                setText('');
                setEditedValue(null);
            }else {
                arr.push({
                    name: txt,
                    id: arr[arr.length-1].id + 1
                })
                setText('');
            }
            
            return arr;
        });
    }

    const addToTodoOnEnter = function(evt) {
        let key = evt.which || evt.keyCode;
        if(key === 13) {
            addToList();
        }
    };

    const removeItem = (id) => {
        setTodo((prev)=> {
            return prev.filter(ele => ele.id !== id);
        });
    }

    const editCell = (ele) => {
        setEditedValue(ele);
        setText(ele.name);
    }

    return (
        <div className="list-blcok">
            <div className="todo-list-input">
                <input type="text" value={txt} onKeyUp={addToTodoOnEnter} onChange={changeInput}/>
                <button onClick={addToList}>{editedValue ? 'Update Value' : 'Add to List'}</button>
            </div>
            <div>
                <div>{editedValue ? editedValue.name : ''}</div>
                <ul className="todo-list">
                    {todo.map((ele) => {
                        return (
                            <li key={ele.id}><span>{ele.id} - {ele.name}</span> <div><span onClick={() => editCell(ele)}>Edit</span> <span onClick={() => removeItem(ele.id)}>x</span></div></li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoLost;
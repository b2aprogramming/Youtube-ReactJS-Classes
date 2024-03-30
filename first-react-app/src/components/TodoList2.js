import { useState, Fragment } from "react";

function TodoList2() {
    const [todo, setTodo] = useState([
        {name: 'test name', id: 1, isEdited: false, editName: ''}
    ]);

    const [txt, setText] = useState('');
    const [editedValue, setEditedValue] = useState(null);
    const [isVal] = useState(false);

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

    const editCell = (obj) => {
        setTodo((prev)=> {
            let arr = [...prev];
            let ind = arr.findIndex(ele => ele.id === obj.id);
            arr[ind].isEdited = true;
            arr[ind].editName = arr[ind].name;
            return arr;
        });
    };

    const editValue = (evt, obj) => {
        setTodo((prev)=> {
            let arr = [...prev];
            let ind = arr.findIndex(ele => ele.id === obj.id);
            arr[ind].editName = evt.target.value;
            return arr;
        });
    }
    const updateEditedValue = (evt, obj) => {
        let key = evt.which || evt.keyCode;
        if(key === 13) {
            setTodo((prev)=> {
                let arr = [...prev];
                let ind = arr.findIndex(ele => ele.id === obj.id);
                arr[ind].name = obj.editName;
                arr[ind].editName = '';
                arr[ind].isEdited = false;
                return arr;
            });
        }
       
    }

    const cancelEdit = (obj) => {
        setTodo((prev)=> {
            let arr = [...prev];
            let ind = arr.findIndex(ele => ele.id === obj.id);
            arr[ind].isEdited = false;
            arr[ind].editName = '';
            return arr;
        });
    };


    return (
        <div className="list-blcok">
            <div className="todo-list-input">
                <input type="text" value={txt} onKeyUp={addToTodoOnEnter} onChange={changeInput}/>
                <button onClick={addToList}>{editedValue ? 'Update Value' : 'Add to List'}</button>
            </div>
            <div>
                <div>==={isVal} ==={editedValue ? editedValue.name : ''}</div>
                <ul className="todo-list">
                    {todo.map((ele) => {
                        return (
                            <li key={ele.id}>
                                {!ele.isEdited && (
                                    <div className="list-wrapper">
                                    <span>{ele.id} - {ele.name}</span> 
                                    <div><span onClick={() => editCell(ele)}>Edit</span> <span onClick={() => removeItem(ele.id)}>x</span></div>
                                </div>
                                )}
                                {ele.isEdited && (
                                    <div>
                                        <input onKeyUp={(evt) => updateEditedValue(evt, ele)}  value={ele.editName} onChange={(evt) => editValue(evt, ele)} />
                                        <span onClick={() => cancelEdit(ele)}>Cancel</span>
                                    </div>
                                )}
                                
                                </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoList2;
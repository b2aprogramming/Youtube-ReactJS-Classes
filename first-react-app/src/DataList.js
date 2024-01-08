import { useState } from "react";

function DataList() {
    const [listData] = useState([
        {name: 'Ram', id: 1},
        {name: 'John', id: 2},
        {name: 'Srinu', id: 3},
        {name: 'David', id: 4},
    ]);
    
    return (
        <div className="list-block">
            <ul>
                {listData.map((ele) => {
                    return (
                        <li key={ele.id}>{ele.name}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default DataList;
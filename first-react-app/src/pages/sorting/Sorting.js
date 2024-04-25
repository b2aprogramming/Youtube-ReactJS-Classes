import { useCallback, useState } from "react";
import { Products } from "./jsonData";

function Sorting(){
    const [listData, setlistData] = useState(Products.products);
    const [selectOptionValue, setselectOptionValue] = useState('');
    const [selctOptions] = useState([
        {name: '--Select--', key: '', id: 0},
        {name: 'Title', key: 'title', id: 1},
        {name: 'Brand', key: 'brand', id: 2},
        {name: 'Category', key: 'category', id: 3},
    ]);
    const [tableHeaders] = useState([
        {name: 'Title', key: 'title', id: 1},
        {name: 'Brand', key: 'brand', id: 2},
        {name: 'Category', key: 'category', id: 3},
    ]);

    const changeInput = useCallback((evt) => {
        if(!evt.target.value) {
            setlistData(Products.products);
        }
        setselectOptionValue(evt.target.value);
    }, []);

    const sortAsc = useCallback((evt) => {
        if(!selectOptionValue) {
            return;
        }
        setlistData((prev) => {
            const arr = [...prev];
            return arr.sort((x, y) => {
                let a = x[selectOptionValue].toLowerCase();
                let b = y[selectOptionValue].toLowerCase();
                if(a > b) {
                    return 1
                } else if(a < b) {
                    return -1
                }else {
                    return 0
                }
            })  
        })
    }, [selectOptionValue]);

    const sortDsc = useCallback((evt) => {
        if(!selectOptionValue) {
            return;
        }
        setlistData((prev) => {
            const arr = [...prev];
            return arr.sort((x, y) => {
                let a = x[selectOptionValue].toLowerCase();
                let b = y[selectOptionValue].toLowerCase();
                if(a > b) {
                    return -1
                } else if(a < b) {
                    return 1
                }else {
                    return 0
                }
            })  
        })
    }, [selectOptionValue]);


    const setActive = useCallback((key) => {
        return (key === selectOptionValue) ? 'active' : '' ;
    },[selectOptionValue]);
    

    return (
        <div>
            <h1>Sorting page {selectOptionValue}</h1>
            <div className="flex-box">
                <select value={selectOptionValue} onChange={changeInput}>
                    {selctOptions.map((ele) => {
                        return (
                            <option key={ele.key} value={ele.key}>{ele.name}</option>
                        )
                    })}
                </select>
                <button onClick={sortAsc}>Sort Ascending</button>
                <button onClick={sortDsc}>Sort Descending</button>
            </div>
            <div className="table-block">
                <table className="table-list">
                    <thead>
                        <tr>
                            {tableHeaders.map((ele) => {
                                return (
                                    <th key={ele.id} className={setActive(ele.key)}>
                                        <div className="column-block">
                                        <div>{ele.name} </div>
                                        <div className="sort-icons">
                                            <span>&#11165;</span>
                                            <span>&#11167;</span>
                                        </div>
                                        </div>
                                    </th>
                                )
                            })}
                            
                        </tr>
                    </thead>
                    <tbody>
                        {listData.map((ele) => {
                            return (
                                <tr key={ele.id}>
                                    <td className={setActive('title')}>{ele.title}</td>
                                    <td className={setActive('brand')}>{ele.brand}</td>
                                    <td className={setActive('category')}>{ele.category}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Sorting;
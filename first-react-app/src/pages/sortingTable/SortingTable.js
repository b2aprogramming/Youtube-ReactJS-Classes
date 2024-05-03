import { useCallback, useState } from "react";
import { Products } from "./jsonTableData";

function SortingTable(){
    const [listData, setlistData] = useState(Products.products);
    const [selectOptionValue, setselectOptionValue] = useState('');
    const [selectedSort, setSelectedSort] = useState(null);
    const [sortType, setSortType] = useState('');
   
    const [tableHeaders] = useState([
        {name: 'Title', key: 'title', id: 1},
        {name: 'Brand', key: 'brand', id: 2},
        {name: 'Category', key: 'category', id: 3},
    ]);
   

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
        if(!selectedSort) {
            return '';
        }
        return (key === selectedSort.key) ? 'active' : '' ;
    },[selectedSort]);
    

    const sortColumn = (ele) => {
        setSelectedSort(ele);
        setSortType((str) => {
            let hVal = str !== '' && ele.key !== selectedSort.key ? '': str;
            let val = hVal;
            if(!hVal) {
                val = 'asc';
            }else if(hVal === 'asc') {
                val = 'dsc';
            } else {
                val = '';
            }
            if(val === '') {
                setlistData(Products.products);
                return val;
            }
            setlistData((prev) => {
                const arr = [...prev];
                return arr.sort((x, y) => {
                    let a = x[ele.key].toLowerCase();
                    let b = y[ele.key].toLowerCase();

                    if(a > b) {
                        return val === 'asc' ? 1 : -1
                    } else if(a < b) {
                        return  val === 'asc' ? -1 : 1
                    }else {
                        return 0
                    }
                })  
            })
            return val;
        });
    };

    const buildSortIcons = useCallback((ele) => {
        if(selectedSort && selectedSort.key === ele.key && sortType === 'asc'){
            return <span>&#11165;</span>
        }
        if(selectedSort && selectedSort.key === ele.key && sortType === 'dsc') { 
            return <span>&#11167;</span>
        }
        if(
            (!selectedSort || (selectedSort && selectedSort.key === ele.key && sortType === '')) || (selectedSort.key !== ele.key)
        ){
        return <>
                <span>&#11165;</span>
                <span>&#11167;</span>
            </>
        }
       
    }, [selectedSort, sortType]);

    return (
        <div>
            <h1>Sorting table page</h1>
            <div className="table-block">
                <table className="table-list">
                    <thead>
                        <tr>
                            {tableHeaders.map((ele) => {
                                return (
                                    <th key={ele.id} className={setActive(ele.key)}>
                                        <div className="column-block">
                                        <div>{ele.name}</div>
                                        <div className="sort-icons" onClick={() => sortColumn(ele)}>
                                            {buildSortIcons(ele)}
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

export default SortingTable;
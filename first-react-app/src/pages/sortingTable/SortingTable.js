import { useCallback, useState } from "react";
import { Products } from "./jsonTableData";



function SortingTable(){
    const [listData, setlistData] = useState(Products.products);
    const [filteredListData, setFilteredListData] = useState(Products.products);
    const [selectedSort, setSelectedSort] = useState(null);
    const [sortType, setSortType] = useState('');
    const [globalSearch, setGlobalSearch] = useState('');
   
    const [tableHeaders, setTableHeaders] = useState([
        {name: 'Title', key: 'title', id: 1, search: ''},
        {name: 'Brand', key: 'brand', id: 2, search: ''},
        {name: 'Category', key: 'category', id: 3, search: ''},
    ]);


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
                setFilteredListData(Products.products);
                return val;
            }
            setFilteredListData((prev) => {
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

    const seearchGlobalTable = useCallback((evt) => {
        let value = evt.target.value;
        setGlobalSearch(value);
        setFilteredListData(() => {
            return listData.filter((ele) => {
                return ele.title.toLowerCase().includes(value.toLowerCase()) || ele.brand.toLowerCase().includes(value.toLowerCase()) || ele.category.toLowerCase().includes(value.toLowerCase());
            })
        })
    },[]);

    const searchCoulmn = useCallback((evt, ind) => {
        let value = evt.target.value;
        setTableHeaders((prev) => {
            const arr = [...prev];
            arr[ind].search = value;
            let keys = arr.reduce((x, ele) => {
                if(ele.search !== '') {
                    x.push(ele);
                }
                return x;
            }, []);
            
            setFilteredListData(() => {
                if(keys.length === 0) {
                    return listData;
                }
                return listData.filter((ele) => {
                    const val = keys.filter((obj) => {
                        return ele[obj.key].toLowerCase().includes(obj.search.toLowerCase());
                    });
                   
                    return val.length === keys.length;
                  
                })
            })

            return arr;
        });
    }, []);

    return (
        <div>
            <h1>Sorting table page</h1>
            <div className="table-block">
                <div>
                    <input type="text" value={globalSearch} onChange={seearchGlobalTable} placeholder="Search..."/>
                </div>
                <table className="table-list">
                    <thead>
                        <tr>
                            {tableHeaders.map((ele, ind) => {
                                return (
                                    <th key={ele.id} className={setActive(ele.key)}>
                                        <div className="column-block">
                                        <div>{ele.name}</div>
                                        <div className="sort-icons" onClick={() => sortColumn(ele)}>
                                            {buildSortIcons(ele)}
                                        </div>
                                        </div>
                                        <div>
                                            <input type="text" value={ele.search} onChange={(evt) => searchCoulmn(evt, ind)} placeholder="Search..."/>
                                        </div>
                                    </th>
                                )
                            })}
                            
                        </tr>
                    </thead>
                    <tbody>
                        {filteredListData.map((ele) => {
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
import { useContext } from "react";
import { PageData } from "../../shred/hooks/data.hook";

function List(){
    const dataList = useContext(PageData);
    console.log('@@@ DAAT', dataList);
    return (
        <div>
            <ul>
                {dataList.listData.map((item) => {
                    return (
                        <li key={item.id}>{item.name}</li>
                    )
                })
                }
                
            </ul>
        </div>
    )
}

export default List;
import { useCallback, useContext, useState } from "react";
import { PageData } from "../../shred/hooks/data.hook";
import Card from "./card";
import TransitionTest from "./TransitionTest";
// PageData.Provider = {
//     name: 'Bhagath Singh'
// }
function HooksPage(){
    const [listData, setListData] = useState([]);
    const pageDataSource = useContext(PageData);
    const addData = useCallback(() => {
        setListData((prev) => {
            return [...prev, {
                    id: prev.length + 1, 
                    name: `Item ${prev.length + 1}`
                }
            ];
        })
    }, []);
   
    return (
        <PageData.Provider value={{
            ...pageDataSource,
            listData: listData
        }}>
        <div>
            <h1>Hooks Page</h1>
            <button onClick={addData}>Add Data</button>
            <div>
                <Card/>
            </div>
            <div>
                <h1>Transition</h1>
                <TransitionTest/>
            </div>
        </div>
        </PageData.Provider>
    )
}

export default HooksPage;
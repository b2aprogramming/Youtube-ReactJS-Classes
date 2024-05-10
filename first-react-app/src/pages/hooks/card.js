import { useContext } from "react";
import List from "./list";
import { PageData } from "../../shred/hooks/data.hook";

function Card() {
    const dataList = useContext(PageData);
    console.log('@@@ Card Data List', dataList);
    return (
        <div className="card-block">
            <h1>Card</h1>
            <List/>
        </div>
    )
}

export default Card;
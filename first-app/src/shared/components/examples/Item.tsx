import { memo, useEffect, useState } from "react";

export interface ItemPrps{
    children: (ele: any) => JSX.Element;
}

function Item({children}: ItemPrps) {
    
    const [itemData] = useState({name: 'item '+ Item.count, id: Item.count});
    const count = Item.count;
    useEffect(() => {
        Item.count += count + 1;
        console.log(Item.count);
        return () => {
           // Item.count = Item.count;
        }
    }, []);
    return (
        <div>
            {children(itemData)};
        </div>
    );
}
Item.count = 0;

export default memo(Item);
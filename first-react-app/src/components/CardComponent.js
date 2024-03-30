import { useEffect, useState } from "react";

// function CardComponent(attr) {
function CardComponent({title, subTitle, counter, cardClick}) {
    const [count, setCount] = useState(1);
    const [isVal] = useState(false);

    const increseCount = () => {
        setCount((prev) => {
            return prev + 1;
        });
    }

    const clickme = () => {
        if(cardClick) {
            cardClick();
        }
    }

    useEffect(() => {
       console.log('@@@ Hi effect'); 
       return () => { //COMPONENT WILL UNMOUNT
        console.log('@@@ Hi effect UNMOUNT'); 
       }
    }, [count, isVal]); // []: COMPONENT DID MOUNT , [count, isVal]: COMPONENT SHOULD UPDATE

    return (
        <div className="card-block">
            <div>{title}</div>
            <div>{subTitle}</div>
            <div>{counter}</div>
            {/* <button onClick={increseCount}>Click me {count}</button> */}
            <button onClick={clickme}>Card clcik</button>
        </div>
    )
}

export default CardComponent;
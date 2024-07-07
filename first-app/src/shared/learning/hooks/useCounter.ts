import { useState } from "react";

export interface UseCounterProps {
    defaultValue?: number;
    increementSize?: number;
    decreementSize?: number;
}

function useCounter(props?: UseCounterProps) {
    const [counter, setCounter] = useState(props?.defaultValue || 0);

    // const obj = {
    //     name: 'bahgath',
    //     phone: '15282'
    // }

    let myName = 'bhagath ssg';
    let myPhone = '5846982 5555';

    // const obj = {
    //     name: myName,
    //     phne: myPhone
    // };

    const obj = {
        myName,
        myPhone
    };


    

  //  console.log(obj);

    const increement = () => {
        setCounter((prev) => {
            
            return prev + (props?.increementSize || 1);
        });
    }
    const decreement = () => {
        setCounter((prev) => {
            return prev - (props?.decreementSize || 1);
        });
    }
    return {
        counter,
        increement,
        decreement
    };
}

export default useCounter;
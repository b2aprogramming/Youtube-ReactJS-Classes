import { Suspense, useCallback, useDeferredValue, useState } from "react";

function Hooks2(){
    const [name, setName] = useState('');
    const [name2, setName2] = useState('');
    const differName2 = useDeferredValue(name2);
    
    const changeName = useCallback((e) => {
        setName(e.target.value);
    }, []);

    const changeName2 = useCallback((e) => {
        setName2(e.target.value);
    }, []);

    return (
        <div>
            <h1>Hooks2</h1>
            <input value={name} onChange={changeName} />
            <div>{name}</div>
            <h5>Update deplay</h5>
            <input value={differName2} onChange={changeName2} />
            
            {/* <Suspense fallback={<div>Loading...</div>}>

            </Suspense>
            <div>{differName2}</div> */}
        </div>
    )
}

export default Hooks2;
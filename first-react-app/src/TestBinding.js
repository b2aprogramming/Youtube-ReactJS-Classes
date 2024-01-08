// import { Fragment } from "react";
import React from "react";

function TestBindings() {

    const getTotal = (a, b) => {
        return a + b;
    };

    return (
        // <div>
        //     Test binding
        //     <h1>title</h1>
        // </div>
        // <>
        //     Test binding
        //     <h1>title</h1>
        // </>
        // <Fragment>
        //     Test binding
        //     <h1>title</h1>
        // </Fragment>

        <React.Fragment>
            Test binding
            <h1>Sum Values</h1>
            <h2>{10 - 20}</h2>
            <h2>{getTotal(20,30)}</h2>
            <h2>{'Total =>> ' + getTotal(40,30)}</h2>
            <h2>Total =>>  {getTotal(40,30)}</h2>
        </React.Fragment>
    );
}


export default TestBindings;
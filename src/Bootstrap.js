import React from "react";
import { Button } from 'react-bootstrap';

function Bootstrap() {
    return(
        <>
            <h1>Hello Gyus!</h1>
            <Button onClick={()=> alert("Hello")}>Click Me!</Button>
        </>
    )
}

export default Bootstrap;
import React from "react";
import { useParams } from "react-router-dom";

function Usernew() {
    const paramas = useParams();
    const {name} = paramas;
    // console.log(name);
    return(
    <>
        <h1>This is {name} Page</h1>
    </>
    )
}

export default Usernew;
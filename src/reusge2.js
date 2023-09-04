import React from "react";

function Reuse2(props) {
    return(
        <>
            {/* <h1>This Function Use for Reusecompowithloop testing</h1> */}
            <span>{props.item.name}</span> <br/><br/>
            <span>{props.item.email}</span> <br/><br/>
            <span>{props.item.mobile}</span> <br/><br/>
        </>
    )
}

export default Reuse2;
import React, { forwardRef } from "react";

function Forwardref2(props,customref) {
    return(
        <>
            <h1>Forward Ref in react - [ Child Component ]</h1> {/* This is Child Component */}
            <input type="text" ref={customref}/>
        </>
    )
}

export default forwardRef(Forwardref2);


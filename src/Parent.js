import React from "react";
import Senddatachildtoparent from "./Senddatachildtoparent";

function Parent() {
    function Parentalert(data) {
        alert(data);
    }
    return(
        <>
            {/* ========= this component is Parent component =========== */}
            <h1>Lifting State Up</h1>
            <Senddatachildtoparent alert={Parentalert} />
        </>
    )
}

export default Parent;
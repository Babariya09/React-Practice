import React, { useRef } from "react";
import Forwardref2 from "./Forwardref2";

function Forwardref() {

    let inputRef = useRef(null);

    function updateInput() {
        inputRef.current.value="1000";
        inputRef.current.style.color="red";
        inputRef.current.focus();
    }

    return(
        <>
            <h1>Forward Ref in react - [ Parent Component ]</h1>
            <Forwardref2 ref={inputRef} />
            <button onClick={updateInput}>Update InputBox</button>
        </>
    )
}

export default Forwardref;


// ============= Note =============

// forward ref te same ref jevuj work kare che but mani lo ke jyare aapde input and button aalag aalag component ma hoi tyare tena dom ne manipulate karva mate aapde forwardref no use karvi.
// ek component ma thi bija component ma ref data mokalva use thya forward ref.

import React, {useRef} from "react";

function Useref() {
    let inputRef = useRef(null);
    function Handelinput() {
        // inputRef.current.value = "100";
        // inputRef.current.focus();
        inputRef.current.style.color = "red";
        inputRef.current.style.display = "none"
    }
    return(
        <>
            <h1>UseRef in react with function component</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={() => Handelinput()}>Update Input Value</button>
        </>
    )
}

export default Useref;
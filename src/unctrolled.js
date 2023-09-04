import React, { useRef } from "react";

function Unctrolled() {
    let inputRef = useRef(null);
    let inputRef2 = useRef(null);
    
    function submitForm(e) {
        e.preventDefault();
        console.log("Input 1 Value", inputRef.current.value);
        console.log("Input 2 Value", inputRef2.current.value);
        let input3 = document.getElementById('input3');
        console.log("Input 3 Value", input3.value);
    }
    return (
        <>
            <h1>Unctrolled Component in react.js</h1>
            <form onSubmit={submitForm}>
                <input type="text" ref={inputRef} /> <br /><br />
                <input type="text" ref={inputRef2}/> <br /><br />
                <input type="text" id="input3"/> <br /><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Unctrolled;



// ===== note =====

// controlled and unctrolled component tyarej kevay ke jyare tema koi input farajiyat hoi.
// unctrolled component tene kevay ke je react na state thi controlled na thata hoi te direct javascript ni madad thi thay athva te react ni ref ni madd thi thya.
// controlled component and uncntrolled component function and class component bane ma samje use thay che.


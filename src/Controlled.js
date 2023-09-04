import React, { useState } from "react";

function Controoled() {
    let [val, setVal] = useState("000");
    let [item, setItem] = useState("");
    return(
        <>
            <h1>Controlled Component</h1>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
            <h2>Value: {val}</h2>
        </>
    )
}

export default Controoled;



// ======= Note ======

// jyare react ni ander input ne state thi contoll kariye tyare tene kevay controll component.
// and unctrolled component te hoi ke direct dom throw handel thay like getelementbyid.

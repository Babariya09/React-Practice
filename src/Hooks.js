// ============================= use state =======================================

// import React, { useState } from "react";

// function Hooks() {
//     const [data, setData] = useState("Prince");
//     return(
//         <>
//             <h1>{data}</h1>
//             <button onClick={()=>setData("babariya")}>Update Data</button>
//         </>
//     )
// }

// export default Hooks;


// ================================ use effect [ Normal ] =============================

// import React, { useState, useEffect } from "react";

// function Hooks() {
//     const [count, setCount] = useState(0);
//     useEffect(()=>{
//         console.warn("UseEffect");
//     })
//     return(
//         <>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Update Data</button>
//         </>
//     )
// }

// export default Hooks;


// =============================== use effect [ how to run use effect in only perticular one state or props ] ======================

import React, { useState, useEffect } from "react";
// ========================= multipale state ====================
// function Hooks() {
//     const [data, setData] = useState(10);
//     const [count, setCount] = useState(100);
//     useEffect(()=>{
//         console.warn("UseEffect For Data!");
//     }, [data])
//     useEffect(()=>{
//         console.warn("UseEffect For Count!");
//     }, [count])
//     return(
//         <>
//             <h1>Count : {count}</h1>
//             <h1>Data : {data}</h1>

//             <button onClick={()=>setCount(count+1)}>Update Count</button>
//             <button onClick={()=>setData(data+1)}>Update Data</button>
//         </>
//     )
// }

// =============================== multipale Props =================================

function Hooks(props) {
 
    useEffect(()=>{
        alert("count. is" + props.count)
    }, [props.count, props.data])
    return(
        <>
            <h1>Count Props : {props.count}</h1>
            <h1>Data Props : {props.data}</h1>

        
        </>
    )
}

export default Hooks;
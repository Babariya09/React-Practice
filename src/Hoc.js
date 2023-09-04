import React, { useState } from "react";

// ================ first component ==================

function Hoc() {
    return(
        <>
            <h1>HOC</h1>
            {/* <Counter />
            <Counter /> */}

            <HOCred cmp={Counter} />
            <HOCgreen cmp={Counter} />
        </>
    )
}


// ===================== second component ===================

// ===================== [ HOC Component ] ===================

function HOCred(props) {
    return <h2 style={{backgroundColor:'red', width:"100px"}}>Red<props.cmp /></h2>
}

function HOCgreen(props) {
    return <h2 style={{backgroundColor:'Green', width:"100px"}}><props.cmp /></h2>
}

// ================ [ Normal Component ] ===================

function Counter() {
    const [count, setCount] = useState(0);

    return(
        <>
            <h3>{count}</h3>
            <button onClick={()=> {setCount(count+1)}}>Update</button>
        </>
    )
}

export default Hoc;



// ======== HOC High Order Component [ Note ] =========

// ek component bija component ne assgen prop ley ane ek alag thi compionent return kare etle high order component.
// second exampale ek component je component nej input ley and component ne j output dey kaik tho do cahnges kari ne jem ke color, text extra.....

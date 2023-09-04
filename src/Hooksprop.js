// =============================== use effect [ how to run use effect in only perticular one state or props ] ======================

import React, { useState, useEffect } from "react";
import Hooks from "./Hooks";

function Hookprop() {

    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);

    return(
        <>
            <Hooks count={count} data={data}/>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setData(data+1)}>Update Data</button>
        </>
    )

}

export default Hookprop;
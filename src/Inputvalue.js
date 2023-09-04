import React, { useState } from "react";

function Inputvalue() {
const [data, setData] = useState(null);
const [print, setPrint] = useState(false);

    function getData(val) {
        console.log(val.target.value);
        setData(val.target.value)
        setPrint(false)
    }

    return(
        <>
            {
                print?
                <h1>{data}</h1>
                :null
            }
            <input type="text" onChange={getData} />
            <button onClick={()=>{setPrint(true)}}>Print Val</button>
        </>
    )
}

export default Inputvalue;
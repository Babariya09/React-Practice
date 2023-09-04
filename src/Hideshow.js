import React, { useState } from "react"

function Hideshow() {

    const [status, setStatus] = useState(false)

    return(
        <>
        {
            status? <h1>Hide And Show With Toggle</h1> : null
        }
            
            <button onClick={()=> {setStatus(false)}}>Hide</button>
            <button onClick={()=> {setStatus(true)}}>Show</button>

            <button onClick={()=> {setStatus(!status)}}>Toggle</button>
        </>
    )
}

export default Hideshow;
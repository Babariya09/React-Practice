import React from "react";

function Senddatachildtoparent(props) {
    const data = "Prince Babariya";
    return(
        <>
            {/* ============ how to send data child to parent [ Lifting State Up ] =============== */}
            {/* ========= this component is child component =========== */}
            {/* <h1>Lifting State Up</h1> */}

            <h1>Child Component : </h1>
            <button onClick={() => props.alert(data)}>Click Me!</button>
        </>
    )
}

export default Senddatachildtoparent;
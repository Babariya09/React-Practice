import React, { useState } from "react";

function Formhandel() {

    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [intrest, setIntrest] = useState("");

    function getformData(e) {
        e.preventDefault()
        console.log(name, intrest, tnc);
    }
    return(
        <>
            <h1>Handel Form</h1>

            <form onSubmit={getformData}>
                <input type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} /> <br/><br/>
                <select onChange={(e)=>{setIntrest(e.target.value)}}>
                    <option>select option</option>
                    <option value="marvel">Marvel</option>
                    <option value="dccomic">DcComic</option>
                </select> <br/><br/>
                <input type="checkbox" onChange={(e)=>{setTnc(e.target.checked)}} /><span>accept term and condition</span> <br/><br/>
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export default Formhandel;


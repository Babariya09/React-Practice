import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
    const [SerchParams, setSerchParmas] = useSearchParams();

    // ======== serch params ===========

    console.log(SerchParams.get('age'));
    console.log(SerchParams.get('city'));
    const age = SerchParams.get('age');
    const city = SerchParams.get('city');

    
    
    
    return(
        <>
            <h1>Filter Page</h1>
            <h3>Age is :{age}</h3>
            <h3>City is:{city}</h3>

        {/* // =========== set params =============== */}

            <button onClick={(e)=> setSerchParmas({age:40})}>Set Age In Query Params</button>
        </>
    )
}

export default Filter;

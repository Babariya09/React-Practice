import React from "react";
import Reuse2 from "./reusge2";

function Reusgecompowithloop() {
    const students = [
        {
            name:"demo",
            email:"demo@gmail.com",
            mobile:1234567891
        },
        {
            name:"demo2",
            email:"demo2@gmail.com",
            mobile:1234567891
        },
        {
            name:"demo3",
            email:"demo3@gmail.com",
            mobile:1234567891
        }
    ]
    return(
        <>
            <h1>Reuse Component With List</h1>
            
            {
                students.map((item, i) => 
                <Reuse2 item={item}/>
                
                )
            }
        </>
    )
}

export default Reusgecompowithloop;
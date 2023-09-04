import React from "react";

function Arraylisting() {
    // const students = ['Anil', 'Sidhu', 'Same', 'Peter'];
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

    // ======== map looping [ when using retun the support only map and not support for loop ] ===========

    // students.map((item)=> {
    //     console.log(item);
    // })

    // for (let i = 0; i < students.length; i++) {
    //     console.log("in for loop", students[i]);
    // }

    return(
        <>
            <h1>Array Listing With Map Function</h1>
            {/* {
                students.map((data) => 
                    <h1>{data}</h1>
                )
            } */}

            <table border="1">
                {
                    students.map((data) => 
                        <tr>
                            <td>name : {data.name}</td>
                            <td>email : {data.email}</td>
                            <td>Mobile : {data.mobile}</td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}

export default Arraylisting;
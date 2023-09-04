import React from "react";
import { Table } from "react-bootstrap";

function Arraylistwithbootstrap() {
    const students = [
        {
            name:"demo",
            email:"demo@gmail.com",
            mobile:111
        },
        {
            name:"demo2",
            email:"demo2@gmail.com",
            mobile:1234567891
        },
        {
            name:"demo3",
            email:"demo3@gmail.com",
            mobile:111
        },
        {
            name:"demo3",
            email:"demo3@gmail.com",
            mobile:1102
        }
    ];
    return(
        <>
            <h1>Array Listing With Bootstrap</h1>
            <Table striped bordered hover variant="dark">
                <tbody>
            <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                    </tr>
            {
                students.map((item, i) => 

                    // ================== show all data in bootstrap tabel ===================

                    // <tr key={i}>
                    //     <td>{item.name}</td>
                    //     <td>{item.email}</td>
                    //     <td>{item.mobile}</td>
                    // </tr>

                    // ================== show only 111 contect =================

                    item.mobile === 111 ? 
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                    </tr> : null

                )
            }
            </tbody>
            </Table>
            
        </>
    )
}

export default Arraylistwithbootstrap;
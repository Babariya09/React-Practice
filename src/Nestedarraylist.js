import React from "react";
import { Table } from "react-bootstrap";

function Nestedarraylist() {
    const students = [
        {
            name: "demo",
            email: "demo@gmail.com",
            mobile: 111,
            address: [
                { Hn: "10", city: "Nioda", state: "Gujrat" },
                { Hn: "110", city: "Nioda", state: "Gujrat" },
                { Hn: "12", city: "Nioda", state: "Gujrat" },
                { Hn: "123", city: "Nioda", state: "Gujrat" },
            ]
        },
        {
            name: "demo2",
            email: "demo2@gmail.com",
            mobile: 1234567891,
            address: [
                { Hn: "10", city: "Nioda", state: "Gujrat" },
                { Hn: "110", city: "Nioda", state: "Gujrat" },
                { Hn: "12", city: "Nioda", state: "Gujrat" },
                { Hn: "123", city: "Nioda", state: "Gujrat" },
            ]
        },
        {
            name: "demo3",
            email: "demo3@gmail.com",
            mobile: 111,
            address: [
                { Hn: "10", city: "Nioda", state: "Gujrat" },
                { Hn: "110", city: "Nioda", state: "Gujrat" },
                { Hn: "12", city: "Nioda", state: "Gujrat" },
                { Hn: "123", city: "Nioda", state: "Gujrat" },
            ]
        },
        {
            name: "demo3",
            email: "demo3@gmail.com",
            mobile: 1102,
            address: [
                { Hn: "10", city: "Nioda", state: "Gujrat" },
                { Hn: "110", city: "Nioda", state: "Gujrat" },
                { Hn: "12", city: "Nioda", state: "Gujrat" },
                { Hn: "123", city: "Nioda", state: "Gujrat" },
            ]
        }
    ];
    return (
        <>
            <h1>Array Listing With Bootstrap</h1>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>S.n</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                        <td>Address</td>
                    </tr>
                    {
                        students.map((item, i) =>

                            // ================== show all nested array data in bootstrap tabel ===================

                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>
                                    <Table striped bordered hover variant="dark">
                                        <tbody>
                                            {
                                                item.address.map((data, i) =>

                                                    <tr key={i}>
                                                        <td>{data.Hn}</td>
                                                        <td>{data.city}</td>
                                                        <td>{data.state}</td>
                                                    </tr>
                                                )}
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </Table>

        </>
    )
}

export default Nestedarraylist;
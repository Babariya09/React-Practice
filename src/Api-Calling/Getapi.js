import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Getapi() {
    const [data, setData] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        axios.get("http://localhost:4000/users/" + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);
    return (
        <>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
                <div className='w-50 border bg-white shadow px-5 pt-5 pb-5 rounded align-items-start'>
                    <h3 className='d-flex align-items-start'>Detail Of User</h3>
                        <div className='mb-2 d-flex align-items-start'>
                            <strong>Name: {data.name}</strong>
                        </div>
                        <div className='mb-2 d-flex align-items-start'>
                        <strong>Email: {data.email}</strong>
                        </div>
                        <div className='mb-3 d-flex align-items-start'>
                        <strong>Mobile: {data.phone}</strong>
                        </div>
                        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
                        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </div>
            </div>
        </>
    )
}


export default Getapi;
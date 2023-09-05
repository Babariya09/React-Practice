import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Update = () => {
    // const [data, setData] = useState([]);
    const [values, setValues] = useState({
        name:'',
        email:'',
        phone:'',
    })

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/users/" + id)
            .then(res => {
                setValues(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const handelUpdate = (event) => {
        event.preventDefault();
        axios.put("http://localhost:4000/users/" + id, values)
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-5 pb-5 rounded align-items-start'>
        <h1 className='d-flex align-items-start'>Update User</h1>
        <form onSubmit={handelUpdate}>
            <div className='mb-2'>
                <label htmlFor='name' className='d-flex align-items-start'>Name:</label>
                <input type="text" name='name' value={values.name} className='form-control' placeholder='Enter Name' onChange={e => setValues({...values, name: e.target.value})} />
            </div>
            <div className='mb-2'>
                <label htmlFor='email' className='d-flex align-items-start'>Email:</label>
                <input type="email" name='email' value={values.email} className='form-control' placeholder='Enter Email' onChange={e => setValues({...values, email: e.target.value})} />
            </div>
            <div className='mb-3'>
                <label htmlFor='phone' className='d-flex align-items-start'>Mobile:</label>
                <input type="text" name='phone' value={values.phone} className='form-control' placeholder='Enter Your User Name' onChange={e => setValues({...values, phone: e.target.value})} />
            </div>
            <button className='btn btn-success'>Update</button>
            <Link to="/" className='btn btn-primary ms-3' >Back</Link>
        </form> 
        </div>
    </div>
    )
}

export default Update

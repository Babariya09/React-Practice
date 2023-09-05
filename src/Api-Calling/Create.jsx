import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Create = () => {

    const [values, setValues] = useState({
        name:'',
        email:'',
        phone:'',
    })

    console.log("value", values);

    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/users", values)
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
                <div className='w-50 border bg-white shadow px-5 pt-5 pb-5 rounded align-items-start'>
                <h1 className='d-flex align-items-start'>Add a User</h1>
                <form onSubmit={handelSubmit}>
                    <div className='mb-2'>
                        <label htmlFor='name' className='d-flex align-items-start'>Name:</label>
                        <input type="text" name='name' className='form-control' placeholder='Enter Name' />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email' className='d-flex align-items-start'>Email:</label>
                        <input type="email" name='email' className='form-control' placeholder='Enter Email' onChange={e => setValues({...values, email: e.target.value})} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='phone' className='d-flex align-items-start'>Mobile:</label>
                        <input type="text" name='phone' className='form-control' placeholder='Enter Your User Name' onChange={e => setValues({...values, phone: e.target.value})} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/" className='btn btn-primary ms-3' >Back</Link>
                </form> 
                </div>
            </div>
    )
}

export default Create

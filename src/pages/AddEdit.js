import axios from 'axios';
import React, { useState } from 'react'

function Create() {
    const [user, setUser]=useState({
        name:'',
        email:'',
        number:'',
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/users',user)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add User Data</h2>
                <div>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control' onChange={e=>setUser({...user, name: e.target.user})}/>
                </div>
                <div>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control' onChange={e=>setUser({...user, email: e.target.user})}/>
                </div>
                <div>
                    <label htmlFor=''>Phone</label>
                    <input type='digit' placeholder='Enter Phone Number' className='form-control' onChange={e=>setUser({...user, number: e.target.user})}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create
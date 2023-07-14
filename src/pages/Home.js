import React, { useEffect, useState } from 'react'
import axios  from "axios"
import { Link } from "react-router-dom"

function Home() {
    const [data, setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/users')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
        <h2>User Details</h2>
        <div>
            <Link to="/create" className="btn btn-success">Add User</Link>
        </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user,index)=>{
                        return <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <button className='btn btn-sm btn-info'>View</button>
                                <button className='btn btn-sm btn-primary mx-2'>Edit</button>
                                <button className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home
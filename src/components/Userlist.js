import React, { useEffect, useState } from 'react'

const Userlist = () => {
    const [empdata, setempdata]= useState(null); 
    useEffect(()=>{
      fetch("https://192.168.1.30/USerAPI/api/UserSetup/BindUserSetup")
      .then((res)=>{
        return res.json();
      }).then((resp)=>{
         console.log(resp);
      }).catch((err)=>{
        console.log(err.message)
      });
    }, [])
  return (
    <div className='container'>
        <div className='card'>
       <div className='card-title'>
         <h2>Employee Listing</h2>
       </div>
        <div className='crad-body'>
            <div>
                <Link to="employee/create" className="btn">Add New</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>SL No</td>
                        <td>Name</td>
                        <td>Phone Number</td>
                        <td>Email ID</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {empdata &&
                        empdata.map(item=>{
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td><a className='btn'>Edit</a></td>
                                <td><a className='btn'>Update</a></td>
                                <td><a className='btn'>Delete</a></td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>

    </div>
  )
}

export default Userlist
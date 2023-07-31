import { Button } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function HodRegistration() {

    const [hodData, setHodData] = useState(() => JSON.parse(localStorage.getItem("hodLoginData")) || [])
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        deparment: "",
        username: "",
        password: "",
        role:"Hod"
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setHodData([...hodData, input])
        alert("Hod Registered successfully!!")
        setInput({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            deparment: "",
            username: "",
            password: ""
        })
    }

    localStorage.setItem("hodLoginData", JSON.stringify(hodData))
    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((pre) => ({ ...pre, [name]: value }))

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-around mb-4'>
                    <div className='form-group'>
                        <label>First Name</label><br />
                        <input className='form-control' onChange={handleChange} required name='fname' type='text' value={input.fname} />
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label><br />
                        <input className='form-control' onChange={handleChange} required name='lname' type='text' value={input.lname} />
                    </div>
                </div>
                <div className='d-flex justify-content-around mb-4'>
                    <div className='form-group'>
                        <label>Email</label><br />
                        <input className='form-control' onChange={handleChange} required name='email' type='email' value={input.email} />
                    </div>
                    <div className='form-group'>
                        <label>Contact</label><br />
                        <input className='form-control' onChange={handleChange} required name='phone' type='number' value={input.phone} />
                    </div>
                </div>
                <div style={{ marginLeft: "40px", marginRight:"320px" }}>
                    <div > <label> Deparment </label></div>
                    <select className='form-control ' name='deparment' required onClick={handleChange} >
                        <option selected>
                            EEE
                        </option>
                        <option value='ece'>
                            CSE
                        </option>
                        <option value='ece'>
                            ECE
                        </option>
                        <option value=' mech'>
                            MECH
                        </option>
                        <option value='civil'>
                            CIVIL
                        </option>
                    </select>
                </div>

                <div className='d-flex justify-content-around mb-4 mt-4'>
                    <div className='form-group'>
                        <label>Username</label><br />
                        <input className='form-control' onChange={handleChange} required name="username" type='text' value={input.username} />
                    </div>
                    <div className='form-group'>
                        <label>Password</label><br />
                        <input className='form-control' onChange={handleChange} required name='password' type='password' value={input.password} />
                    </div>
                </div>
                <Button style={{width:"90%",marginLeft:"30px"}} className="text-center" sx={{ mt: 2 }} type='submit' color='secondary' variant='contained'>Register</Button>
                <p className='mt-3 text-center'>Already Registered <NavLink to={"/login"}>Login</NavLink></p>
                {/* <div className='d-flex  d-block flex-row-reverse mt-3 '>
                    <div style={{ width: "100%" }}>
                        <button className='btn btn-primary' type='submit' style={{ width: "100%" }}>Register</button>
                    </div>
                </div> */}
            </form>
        </>
    )
}

export default HodRegistration
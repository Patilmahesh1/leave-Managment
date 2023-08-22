import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function StaffRegistration() {

    const navigate = useNavigate()
    const [staffData, setStaffData] = useState(() => JSON.parse(localStorage.getItem("staffLoginData")) || [])
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        deparment: "",
        username: "",
        password: "",
        role: "Staff"
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setStaffData([...staffData, input])
        alert("Staff Registered Successfully!!")
        setInput({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            deparment: "",
            username: "",
            password: "",
        })
    }

    useEffect(() => {
        if (staffData) {
            localStorage.setItem("staffLoginData", JSON.stringify(staffData))
        }
    }, [staffData])

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((pre) => ({ ...pre, [name]: value }))

    }


    const userName = staffData.map((user) => {
        return user.username
    })
    const data = userName.find((data) => data === input.username)

    const hodData = JSON.parse(localStorage.getItem("hodLoginData"))
    const hodUserName = hodData.map((user) => {
        return user.username
    })
    const hData = hodUserName.find((data) => data === input.username)
    

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-around mb-4'>
                        <div className='form-group'>
                            <label>First Name</label><br />
                            <input className='p-2' onChange={handleChange} required name='fname' type='text' value={input.fname} />
                        </div>
                        <div className='form-group'>
                            <label>Last Name</label><br />
                            <input className='p-2' onChange={handleChange} required name='lname' type='text' value={input.lname} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-around mb-4'>
                        <div className='form-group'>
                            <label>Email</label><br />
                            <input className='p-2' onChange={handleChange} required name='email' type='email' value={input.email} />
                        </div>
                        <div className='form-group'>
                            <label>Contact</label><br />
                            <input className='p-2' onChange={handleChange} required name='phone' type='number' value={input.phone} />
                        </div>
                    </div>
                    <div className='form-group' style={{ marginLeft: "60px", marginRight: "320px" }}>
                        <div > <label> Deparment </label></div>
                        <select className='p-2 col-9' requireds name='deparment' onClick={handleChange} >
                            <option selected>
                                CSE
                            </option>
                            <option value='eee'>
                                EEE
                            </option>
                            <option value='mech'>
                                MECH
                            </option>
                            <option value='ece'>
                                ECE
                            </option>
                            <option value='civil'>
                                CIVIL
                            </option>
                        </select>
                    </div>

                    <div className='d-flex justify-content-around mb-4 mt-4'>
                        <div className='form-group'>
                            <label>Username</label><br />
                            <input className='p-2' onChange={handleChange} required name="username" type='text' value={input.username} />
                            {(data === input.username || hData === input.username) && <div className='text-danger'>Please enter new username</div>} 
                        </div>
                        <div className='form-group'>
                            <label>Password</label><br />
                            <input className='p-2' onChange={handleChange} required name='password' type='password' value={input.password} />
                        </div>
                    </div>
                    <Button style={{ width: "90%", marginLeft: "30px" }} className="text-center" sx={{ mt: 2 }} type='submit' color='secondary' variant='contained'>Register</Button>
                    <p className='mt-3 text-center'>Already Registered <NavLink to={"/login"}>Login</NavLink></p>
                </form>
            </div>
        </>
    )
}

export default StaffRegistration
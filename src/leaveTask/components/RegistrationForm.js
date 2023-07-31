import React, { useState } from 'react'
import HodRegistration from './HodRegistration'
import StaffRegistration from './StaffRegistration'

function RegistratonForm() {

    const [registration, setRegistration] = useState({
        contact: "",
        staff: "",
        hod: "",
        username: "",
        password: ""
    })
    const handleSubmit = () => {

    }

    const handleChange = (e) => {

        const { name, value } = e.target
        setRegistration((pre) => ({ ...pre, [name]: value }))

    }
    return (
        <>
            <div className='col-6' style={{ margin: "100px auto", boxShadow:"2px 6px 8px purple" }}>
                <div className='shadow p-3 mb-5 bg-dark text-white rounded'>
                    <div style={{ marginBottom: "20px",textAlign:"center" }} className="my-2" name="contact">
                        <input type="radio" name="contact" id="hod" value="hod" onClick={handleChange} />
                        <label htmlFor="hod" className='mx-2'> HOD </label>
                        <input type="radio" name="contact" id="staff" value="staff" onClick={handleChange} />
                        <label style={{ marginLeft: "" }} htmlFor="staff" className='mx-2'> STAFF </label>
                        <br />
                    </div>

                    {registration.contact === "hod" && <HodRegistration />
                        || registration.contact === "staff" &&
                        <StaffRegistration />
                    }
                </div>
            </div >
        </>
    )
}

export default RegistratonForm
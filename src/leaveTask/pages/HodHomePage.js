import { Button } from '@mui/material'
import React, { useState } from 'react'

function HodHomePage() {
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem("leaveData")))


  const handleChange = ({ id }) => {
    const approveLeave = data.map((res) => {
      if (res.id === id) {
        res.status = "Approved"
        return res
      }
      return res
    })
    setData(approveLeave)
    localStorage.setItem("leaveData", JSON.stringify(approveLeave))

  }



  const handleReject = ({ id }) => {
    const updateLeave = data.map((res) => {
      if (res.id === id) {
        res.status = "Rejected"
      }
      return res
    })
    setData(updateLeave)
    localStorage.setItem("leaveData", JSON.stringify(updateLeave))

  }


  return (
    <>
      <div className='d-flex ' style={{ margin: "90px 0 0"}}>
        {data?.map((data, i) => {
          return <div className="card col-3 mx-5" key={i}>
            <div className="card-body" style={{boxShadow:"2px 6px 8px purple" }}>
              <p><strong>Leave From </strong></p>
              <p>{data.fromDate} to {data.toDate}</p>
              <p><strong>Number Of Days</strong> : {data.days}</p>
              <p><strong>Reason:</strong> <br /> {data.reason}</p>
              <p><strong>Status: </strong>{data.status}</p>

              <div className='d-flex justify-content-around'>
                <Button type='submit' className='bg-danger px-4 text-white' onClick={() => handleReject(data)}>Reject</Button>
                <Button type='submit' className='px-4' color="secondary" variant='contained' onClick={() => handleChange(data)}>Approve</Button>
              </div>

            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default HodHomePage
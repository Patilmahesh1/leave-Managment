import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("signin")
    navigate("/login")
  }
  return (
    <>
      <AppBar sx={{ backgroundColor: "black" }}>
        <Toolbar>
            <h4>LEAVE MANAGMENT</h4>
          <div style={{ marginLeft: "auto" }}>
            <Button color="secondary" variant="contained" onClick={() => navigate("login")}>Login</Button>
            <Button color='secondary' variant="contained" style={{ marginLeft: "15px" }} onClick={handleLogout}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
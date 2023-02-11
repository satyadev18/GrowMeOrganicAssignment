import { Button, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Deny = () => {
  return (
    <div style={{margin:' 10px 30px',padding:'10px'}}>
        <Typography variant='h3'> Looks Like You haven't Register <br />
        Please Register to Visit this Page</Typography>
        <NavLink   to='/'><Button variant="contained" color="primary" >Register</Button></NavLink>

    </div>
  )
}

export default Deny
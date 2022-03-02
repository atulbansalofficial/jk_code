import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';



const NavBar = () => {
    return (
        <AppBar position='fixed' >
            <Toolbar>
                <Typography flexGrow={1} variant='h6'>Logo</Typography>
                <Button variant='text' color="inherit" startIcon={<LoginIcon/>}>Login</Button>
                <Button variant='text' color="inherit" endIcon={<LogoutIcon/>}>Logout</Button>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar
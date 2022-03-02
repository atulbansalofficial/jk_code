import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ContactUs = () => {
 return (
  < >
   <Typography variant={"h4"} mb={6} mt={6}>Contact Us</Typography>

   <Box component="form">
    <TextField
     type="text"
     id="outlined-basic"
     label="First Name"
     variant="outlined"
     sx={{ m: 1, width: "300px" }}
     placeholder='First Name'
    />
    <TextField
     type="text"
     id="outlined-basic"
     label="Last Name"
     variant="outlined" sx={{ m: 1, width: "300px" }}
     placeholder='Last Name'
    />
    <TextField
     type="number"
     id="outlined-basic"
     label="Phone Number"
     variant="outlined" sx={{ m: 1, width: "300px" }}
     placeholder='Phone Number'
    />
    <TextField
     type="text"
     id="outlined-basic"
     label="Message"
     multiline
     rows={4}
     variant="outlined"
     fullWidth
     placeholder='Message'
     sx={{ m: 1 }}
    /><Button size="large" variant="contained" type="submit" sx={{ m: 1 }}>Send</Button>
   </Box>

  </>
 )
}

export default ContactUs
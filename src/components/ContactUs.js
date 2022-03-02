import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactUs = () => {


 const formik = useFormik({
  initialValues: {
   firstName: "",
   lastName: "",
   phone: "",
   message: "",
  },
  validationSchema: Yup.object(
   {
    firstName: Yup.string().required("This is Required"),
    lastName: Yup.string().required("This is Required"),
    phone: Yup.string().required("This is Required"),
    message: Yup.string().required("This is Required")
   }
  ),
  onSubmit: (values) => {
   alert(JSON.stringify(values))
   console.log("Request Payload", values);


  }
 })

 return (
  < >
   <Typography variant={"h4"} mb={6} mt={6}>Contact Us</Typography>

   <Box component="form"

    onSubmit={formik.handleSubmit}>
    <TextField
     type="text"
     id="outlined-basic"
     label="First Name"
     variant="outlined"
     sx={{ m: 1, width: "300px" }}
     placeholder='First Name'
     name='firstName'
     onChange={formik.handleChange}
     error={formik.touched.firstName && Boolean(formik.errors.firstName)}
     onBlur={formik.handleBlur}
     helperText={formik.touched.firstName && formik.errors.firstName}
    />
    <TextField
     type="text"
     id="outlined-basic"
     label="Last Name"
     variant="outlined" sx={{ m: 1, width: "300px" }}
     placeholder='Last Name'
     name='lastName'
     onChange={formik.handleChange}
     error={formik.touched.lastName && Boolean(formik.errors.lastName)}
     onBlur={formik.handleBlur}
     helperText={formik.touched.lastName && formik.errors.lastName}
    />
    <TextField
     type="number"
     id="outlined-basic"
     label="Phone Number"
     variant="outlined" sx={{ m: 1, width: "300px" }}
     placeholder='Phone Number'
     name='phone'
     onChange={formik.handleChange}
     error={formik.touched.phone && Boolean(formik.errors.phone)}
     onBlur={formik.handleBlur}
     helperText={formik.touched.phone && formik.errors.phone}
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
     name='message'
     onChange={formik.handleChange}
     error={formik.touched.message && Boolean(formik.errors.message)}
     onBlur={formik.handleBlur}
     helperText={formik.touched.message && formik.errors.message}
    />
    <Button size="large" variant="contained" type="submit" sx={{ m: 1 }}>Send
    </Button>
   </Box>

  </>
 )
}

export default ContactUs
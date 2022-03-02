import { Button, Grid, Typography } from '@mui/material'
import { Box, width } from '@mui/system'
import React from 'react'
import Cake from '../img/cake.jpg'
const HeroSection = () => {
    return (
        <Grid direction={"row"} alignItems="center" sx={{ p: 2, border: "1px solid gray" }} container={true}
        >
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                <Typography color="inherit" variant='h3' >A bliss in every byte</Typography>
                <Typography variant='h5' >We offer tasty cakes and sweets for you</Typography>
                <Button sx={{ borderRadius: 5 }} size='large' variant="contained">Call us</Button>
            </Grid>
            <Grid container justifyContent={"center"} item sx={{ backgroundColor: "lightcoral" }} xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                <Box component="img" src={Cake} sx={{ border: '1px dashed black', height: '75%', width: "75%" }} />
            </Grid>

        </Grid>
    )
}

export default HeroSection
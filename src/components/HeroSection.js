import { Button, Grid, Typography } from '@mui/material'
import { Box, width } from '@mui/system'
import React from 'react'
import Cake from '../img/cake.png'
const HeroSection = () => {
    return (
        <Grid direction={"row"} alignItems="center" container={true}
        >
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                <Typography color="inherit" variant='h3' >A bliss in every byte</Typography>
                <Typography variant='h5' >We offer tasty cakes and sweets for you</Typography>
                <Button sx={{ borderRadius: 5 }} size='large' variant="contained">Call us</Button>
            </Grid>
            <Grid container justifyContent={"center"} item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                <Box component="img" src={Cake} />
            </Grid>

        </Grid>
    )
}

export default HeroSection
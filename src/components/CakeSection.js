import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CakeSection = () => {
    return (
        <>
            <Typography variant='h4' my={6}>Cake</Typography>
            <Card sx={{ maxWidth: "300px" }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image="https://media.istockphoto.com/photos/confectioner-decorating-chocolate-cake-closeup-picture-id1187830875?k=20&m=1187830875&s=612x612&w=0&h=LoRXyD8Jw9N-CfkKtXe23uHctZUetcH5zZFMwIzXapU="
                />
                <CardContent>
                    <Typography variant="h5" >
                        Cake name
                    </Typography>

                </CardContent>

            </Card>
        </>
    )
}

export default CakeSection
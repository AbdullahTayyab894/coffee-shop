import React from 'react'
import { Typography, Grid, Box, Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './about.css'


import s3 from '../../img/s3.jpg'

const About = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={6} >
                    <Box
                        sx={{
                            mt: "70px",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "50%"
                        }}>
                        <img src={s3} alt="" width="300px" height="300px" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className='box' sx={{
                        maxWidth: 345,
                        mt: "70px",
                        ml: "100px",
                        background: "rgb(32 23 18)",
                        color: "white",
                        borderRadius: "10px"
                    }}>
                        <CardActionArea>
                            <CardContent className='content'>
                                <Typography gutterBottom variant="h5" component="div">
                                    About US
                                </Typography>
                                <Typography variant="body2" color="text.secondary"
                                    sx={{
                                        textAlign: "justify",
                                        color: "white"
                                    }}>
                                    The about us page is often a reflection of the purpose and personality of the business and its owners or top employees. Finally, the page can also incorporate contact or locational information. One way to view the about us concept is as a text self-portrait or short autobiography created by a business
                                    I am able to handle multiple tasks on a daily basis.
                                    I use a creative approach to problem solve.
                                    I am a dependable person who is great at time management.
                                    I am always energetic and eager to learn new skills.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default About

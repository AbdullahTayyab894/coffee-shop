import React from 'react'
import { Typography, Grid, Box, Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import s3 from '../../img/s3.jpg'
import './about.css'

const About = () => {
    return (
        <div id='about'>
            <Typography gutterBottom variant="h3" component="div" sx={{
                textAlign: "center",
                color:"white"
            }}>
                About Us
            </Typography>
            <Grid container>
                <Grid item xs={12} md={6} >
                    <Box
                        sx={{
                            mt: "40px",
                            display: "block",
                            marginLeft: "70px",
                            // marginRight: "auto",
                            width: "60%"
                        }}>
                        <img src={s3} alt="" width="350px" height="300px" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className='box' sx={{
                        maxWidth: 360,
                        mt: "40px",
                        ml: "65px",
                        background: "rgb(32 23 18)",
                        color: "white",
                        borderRadius: "10px"
                    }}>
                        <CardActionArea>
                            <CardContent className='content'>
                                <Typography variant="body2" color="text.secondary"
                                    sx={{
                                        textAlign: "justify",
                                        color: "white",
                                        fontSize: "17px",
                                    }}>
                                    The about us page is often a reflection of the purpose and personality of the business and its owners or top employees. Finally, the page can also incorporate contact or locational information. One way to view the about us concept is as a text self-portrait or short autobiography created by a business
                                    I am able to handle multiple tasks on a daily basis.
                                    I use a creative approach to problem solve.
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

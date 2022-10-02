import { Typography, Grid, Box, Button } from '@mui/material'
import coffee from '../../img/coffee.jpeg'
import React, { Component } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Description = (images) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div id='home'>
            <Grid container
                sx={{
                    justifyContent: "center",
                    marginTop:"100px"
                }}>

                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            marginTop: "100px",
                            marginLeft: "50px",
                            textAlign: "center"
                        }}>
                        <Typography variant='h1'
                            sx={{
                                color: "white",
                            }}>
                            Coffee
                        </Typography>
                        <Typography
                            sx={{
                                color: "white",
                                marginBottom: "20px"
                            }}>
                            Servese for office, Breakroom <br /> and free delevery
                        </Typography>
                        <Button variant="outlined" onClick={handleClickOpen}
                            sx={{
                                color: "white",
                                borderColor: "white"
                            }}>
                            Detail
                        </Button>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle
                                sx={{
                                    textAlign: "center"
                                }}>{"Our Services!"}</DialogTitle>
                                <Typography variant='body1' 
                                sx={
                                    {
                                        textAlign:"center"
                                    }
                                }>
                                We offer a vibrant, flexible workspace setting, high-quality food and drink, comfortable workstations, business secure / high-speed Internet
                                </Typography>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description"
                                    sx={{
                                        textAlign: "justify"
                                    }}>
                                    <Typography>Benifits</Typography>
                                    <ul>
                                        <li>Boosts energy levels</li>
                                        <li>May be linked to a lower risk of type 2 diabetes</li>
                                        <li>Could support brain health</li>
                                        <li>May promote weight management</li>
                                        <li>Linked to a lower risk of depression</li>
                                        <li>Could protect against liver conditions</li>
                                        <li>Supports heart health</li>
                                        <li>Could increase longevity</li>
                                    </ul>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Close</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} >
                    <Box
                        sx={{
                            mt: "70px",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "50%"
                        }}>
                        <img src={coffee} alt="" width="300px" height="300px" />
                    </Box>
                </Grid>

            </Grid>
        </div >
    )
}
export default Description
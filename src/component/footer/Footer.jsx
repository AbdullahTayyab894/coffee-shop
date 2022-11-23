import React from 'react';
import { Avatar, Box, Grid, Typography, InputAdornment, Input } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import home from '../../img/home.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Foter = () => {
  const {register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (e) => {
    console.log(e)
    toast.success("Successfully submitted")
    // e.preventDefault();
    reset()
  }
  return (
    <div>
      <Grid container
        sx={{
          mt: "100px",
        }}>
        <Grid item xs={12} md={3}
          sx={{
            justifyContent: "center",
            width: "300px",
            margin: "auto"
          }}>
          <Box>
            <Avatar src={home}
              sx={{
                width: "160px",
                height: "150px",
                margin: "auto"
              }}></Avatar>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "160px",
              margin: "auto"
            }}>
            <a href="https://web.facebook.com/" target="_blank">
              <Avatar
                sx={{
                  background: "rgba(44,29,22,255)",
                }}>
                <FacebookIcon />
              </Avatar>
            </a>

            <a href="https://www.instagram.com/" target="_blank">
              <Avatar
                sx={{
                  background: "rgba(44,29,22,255)",
                }}><InstagramIcon /></Avatar>
            </a>

            <a href="https://twitter.com/home" target="_blank">
              <Avatar
                sx={{
                  background: "rgba(44,29,22,255)",
                }}><TwitterIcon /></Avatar>
            </a>

            <a href="https://wa.me/message/PYRPB5XT6Y54A1" target="_blank">
              <Avatar
                sx={{
                  background: "rgba(44,29,22,255)",
                }}><WhatsAppIcon /></Avatar>
            </a>
          </Box>

        </Grid>
        <Grid item xs={12} md={3}
          sx={{
            color: "white",
            mt: "10px",
            textAlign: "center"
          }}>
          <Typography variant='h5'>
            Check Links
          </Typography>
          <Typography>
            Home
          </Typography>
          <Typography>
            Contact
          </Typography>
          <Typography>
            Blog
          </Typography>
          <Typography>
            Reservation
          </Typography>

        </Grid>
        <Grid item xs={12} md={3}
          sx={{
            color: "white",
            mt: "10px",
            textAlign: "center"
          }}>
          <Typography variant='h5'>
            Contact
          </Typography>
          <Typography>
            www.coffee.com
          </Typography>
          <Typography>
            03000000000
          </Typography>
          <Typography>
            www.facebook.com
          </Typography>
          <Typography>
            www.twitter.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}
          sx={{
            color: "white",
            mt: "10px",
            textAlign: "center"
          }}>
          <Typography variant='h5'>
            Subscribe for news
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input style={{
              width:"220px",
              height:"40px",
              paddingLeft:"10px"
            }}
              placeholder='Enter your email'
              {...register("mail", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }, { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"} />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}

          </form>
        </Grid>
      </Grid>
    </div>
  )
}
export default Foter
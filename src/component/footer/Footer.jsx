import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import home from '../../img/home.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Foter = () => {
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
          <Typography>
            <input type="text" name="" id="" style={{
              width: "195px",
              height: "30px"
            }} />
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
export default Foter
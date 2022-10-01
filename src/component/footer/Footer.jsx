import { Avatar, Box, Grid, Typography, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react'
import home from '../../img/home.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';

const Foter = () => {
  return (
    <div>
      <Grid container
        sx={{
          mt: "100px",
          // ml: "100px"
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
            <Avatar
              sx={{
                background: "rgba(44,29,22,255)",
              }}><FacebookIcon /></Avatar>
            <Avatar
              sx={{
                background: "rgba(44,29,22,255)",
              }}><InstagramIcon /></Avatar>
            <Avatar
              sx={{
                background: "rgba(44,29,22,255)",
              }}><TwitterIcon /></Avatar>
            <Avatar
              sx={{
                background: "rgba(44,29,22,255)",
              }}><WhatsAppIcon /></Avatar>
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
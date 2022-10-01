import { Box, Typography } from '@mui/material'
import React from 'react'
import './style.css'

export const Reservetable = () => {
    return (
        <div style={{
            color: "white"
        }}>
                <Box sx={{
                    maxWidth: "40%",
                    margin: "auto"
                }}>
                    <form action="">
                        <Box>
                            <Typography variant="h4"
                                sx={{
                                    textAlign: "center"
                                }}>Reserve Your Table</Typography>
                            <table border="3"
                                style={{
                                    width: "100%",
                                    height: "350px",
                                }}>
                                <thead rowspan="2" style={{
                                    textAlign: "center"
                                }}>
                                    <Typography variant="h5">Enter your Credentials</Typography>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="2">
                                        <input className='reserve_input' type="text" placeholder='Enter Your name' /> <br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                        <input className='reserve_input' type="email" placeholder='Enter Your email' /> <br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Select No of Seat</td>
                                        <td>
                                            <select className='reserve_select' name="" id="">
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                                <option value="">6</option>
                                                <option value="">8</option>
                                                <option value="">10</option>
                                            </select> <br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Private Room</td>
                                        <td><input type="checkbox" /> </td>
                                    </tr>
                                    <tr>
                                        <td>Female Wator</td>
                                        <td><input type="checkbox" /> </td>
                                    </tr>
                                    <tr>
                                        <td>Spa</td>
                                        <td><input type="checkbox" /> </td>
                                    </tr>
                                    <tr>
                                        <td>BirthDay Hal</td>
                                        <td><input type="checkbox" /> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Box>
                        <button className='send-btn'>Send</button>
                    </form>
                </Box>
        </div>
    )
}

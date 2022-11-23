import React from 'react'
import { Box, Typography } from '@mui/material'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

export const Reservetable = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (e) => {
        console.log(e)
        toast.success("Successfully submitted")
        // e.preventDefault();
        reset()
    }
    return (
        <div style={{
            color: "white",
            marginTop: "100px",
        }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{
                    position: "relative",
                    width: "70%",
                    margin: "auto",
                }}>
                    <Typography variant="h4"
                        sx={{
                            textAlign: "center",
                            mb: "10px",
                        }}>Reserve Your Table</Typography>
                    <table border="1"
                        style={{
                            width: "100%",
                            height: "350px",
                        }}>
                        <thead rowspan="3" style={{
                            textAlign: "center"
                        }}>
                            <Typography variant="h5">Enter your Credentials</Typography>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="2">
                                    <input className='reserve_input'
                                        placeholder='Enter your name'
                                        {...register("firstName", { required: true })}
                                        aria-invalid={errors.firstName ? "true" : "false"}
                                    /> <br />
                                    {errors.firstName?.type === 'required' && <p role="alert">Name is required</p>}
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <input className='reserve_input'
                                        placeholder='Enter your email'
                                        {...register("mail", {
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        }, { required: "Email Address is required" })}
                                        aria-invalid={errors.mail ? "true" : "false"} />
                                    {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                                </td>
                            </tr>
                            <tr>
                                <td>Select No of Seat</td>
                                <td>
                                    <select className='reserve_select'
                                        {...register("seats")}
                                        style={{
                                            width: "100px",
                                            height: "30px",
                                            textAlign: "center"
                                        }}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="6">6</option>
                                        <option value="8">8</option>
                                        <option value="10">10</option>
                                        <option value="More Then 10">More Then 10</option>
                                    </select> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Private Room</td>
                                <td><input type="checkbox" 
                                {...register("p-room")}
                                style={{
                                    width: "25px",
                                    height: "25px"
                                }} /> </td>
                            </tr>
                            <tr>
                                <td>Female Waitor</td>
                                <td><input type="checkbox" 
                                {...register("f-waitor")}
                                style={{
                                    width: "25px",
                                    height: "25px"
                                }} /> </td>
                            </tr>
                            <tr>
                                <td>Spa</td>
                                <td><input type="checkbox" 
                                {...register("spa")}
                                style={{
                                    width: "25px",
                                    height: "25px"
                                }} /> </td>
                            </tr>
                            <tr>
                                <td>BirthDay Hal</td>
                                <td><input type="checkbox" 
                                {...register("b-hall")}
                                style={{
                                    width: "25px",
                                    height: "25px"
                                }} /> </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='send-btn'>Send</button>
                </Box>
            </form>
        </div>
    )
}

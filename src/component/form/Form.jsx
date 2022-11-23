import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './form.css'

const Contact = () => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const onSubmit = (e) => {
    console.log(e)
    toast.success("Successfully submitted")
    // e.preventDefault();
    reset()
  }


  return (
    <div className='login-container' id='contact'>

      <div className='login-container-child2'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='h1'>Contact Us</h2>
          <input
            className='input1'
            placeholder='Enter your name'
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === 'required' && <p role="alert">Name is required</p>}

          <input className='input1'
            placeholder='Enter your email'
            {...register("mail", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            }, { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"} />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}

          <textarea name="question" id="" cols="30" rows="40" className='input1'
            placeholder='Enter your Query'
            {...register("text", { required: true })}
            aria-invalid={errors.text ? "true" : "false"}
          />
          {errors.text?.type === 'required' && <p role="alert">Query is required</p>}
          <button className='sendBtn'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

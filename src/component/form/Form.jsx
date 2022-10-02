import React, { useState } from 'react'
import { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import './form.css'

const Login = () => {
  const initaialState = { email: "", name: "", question: "" }
  const [loginData, setloginData] = useState(initaialState);
  const [loginDataErrors, setloginDataErrors] = useState({});
  const [isLogin, setisLogin] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData({ ...loginData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setloginDataErrors(validation(loginData))
    setisLogin(true)

  }

  useEffect(() => {
    if (Object.keys(loginData).length === 0 && isLogin) { }
  }, [loginDataErrors])

  const validation = (value) => {
    let error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.email) {
      error.email = "Enter Email";
    }
    else if (!regex.test(value.email)) {
      error.email = "Valid email is required"
    }
    if (!value.name) {
      error.name = "Enter your Name";
    }
    if (!value.question) {
      error.question = "Enter your Query";
    }
    return error;
  }
  return (
    <div className='login-container' id='contact'>

      <div className='login-container-child2'>
        <form action="" onSubmit={handleSubmit}>
          <h2 className='h1'>Contact Us</h2>
          <input className='input1'
            placeholder='Enter your name'
            type="text"
            name="name"
            value={loginData.name}
            onChange={handleChange} />
          <p className='pera'>{loginDataErrors.name}</p>
          <input className='input1'
            placeholder='Enter your email'
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleChange} />
          <p className='pera'>{loginDataErrors.email}</p>
          <textarea name="question" id="" cols="30" rows="40" className='input1'
            placeholder='Query Center'
            value={loginData.question}
            onChange={handleChange} />
          <p className='pera'>{loginDataErrors.question}</p>
          <button className='sendBtn'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Login

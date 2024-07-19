// import { Axios } from 'axios';
// import { response } from 'express';
import Axios from "axios";

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";


const LoginForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({
        email: "", password: ""
    });

    function changeHandler(event){
        setFormData((prev) => {
            return{
                ...prev, [event.target.name]: event.target.value
            }
        })
    }

    const navigate = useNavigate();

    function loginHandler(event){
        event.preventDefault();
        const { email, password } = formData;
        Axios.post("http://localhost:4001/login", {
            email: email,
            password: password,
        }).then((response) => {
            if(response.data.message){
                console.log(response.data.message);
                toast.error("User Not Found.")
            }
            else{
                setIsLoggedIn(true);
                toast.success("Logged in successfully");
                navigate('/dashboard', { state: { email: email } });
            }
        }).catch(err => console.log(err))
    }

  return (
    <form onSubmit={loginHandler}>
        <label>
            <p>
                Email Address <sup>*</sup>
            </p>
            <input
                required
                type='email'
                name='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Email Id'

            />
        </label>

        <label>
            <p>
                Password <sup>*</sup>
            </p>
            <input
                required
                type='password'
                name='password'
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'

            />
        </label>

        <button>
            <p>Log In</p>
        </button>
    </form>
  )
}

export default LoginForm
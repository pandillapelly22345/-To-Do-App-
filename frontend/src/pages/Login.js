import React from 'react'
import Template from '../components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Check Your To Do List"
      desc2="Get Started"
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
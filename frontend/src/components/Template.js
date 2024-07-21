import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


const Template = ({title, desc1, desc2, formtype, setIsLoggedIn, setUserName}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formtype === "signup" ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
            (<LoginForm setIsLoggedIn={setIsLoggedIn} setUserName={setUserName}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                <p>Already have an account?</p>
            </button>

        </div>
    </div>
  )
}

export default Template
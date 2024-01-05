import React, { useContext, useState } from 'react'
import AuthForm from './AuthForm.jsx'
import axios from 'axios'
import { UserContext } from '../context/UserContext.jsx'

const initInputs= {username:'', password:''}
export default function Auth() {
   const {login , signup, errMsg, resetAuthErr} = useContext(UserContext)
    const [inputs, SetInputs]= useState(initInputs)
    const [toggle, setToggle]= useState(false)
    function handleChange(e){
      const {name,value}=e.target
      SetInputs(prevInputs =>({
        ...prevInputs,
        [name]:value
      })
      )
    }
    function handleSignup(e){
      e.preventDefault() //signup
      signup(inputs)
    }
    function handleLogin(e){
      e.preventDefault() //login
      login(inputs)
    }
    function toggleForm(){
      setToggle(prev=> !prev)
      resetAuthErr()
    }
  return (
    <div className='auth-container'>
      <h1>Join us </h1>
      {!toggle?
      <>
        <AuthForm
         handleChange={handleChange}
         handleSubmit={handleSignup}
         inputs={inputs}
         btnText="Signup"
         errMsg={errMsg}
         resetAuthErr ={resetAuthErr}
         />
        <p onClick={toggleForm}>Already a member?</p> 
      </>
      :
      <>
      <AuthForm
        handleChange={handleChange}
        handleSubmit={handleLogin}
        inputs={inputs}
        btnText="Login"
        errMsg = {errMsg}
        resetAuthErr ={resetAuthErr}
        />
        <p onClick={toggleForm}> Not a member?</p>
        
      
      
      
      
      
      </>

      }
    </div>

  )
}

import React from 'react'
import LoginC from '../components/Login'

function Login(props) {
  
  return (
    <>
      <LoginC  
      changeIsLoggedIn={props.changeIsLoggedIn}
      printName = {props.printName}
      />
    </>
  )
}

export default Login;
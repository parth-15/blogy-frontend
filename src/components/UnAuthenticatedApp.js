import React from 'react'
import Notification from './Notification'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function UnAuthenticatedApp() {
  return (
    <>
      <Notification />
      <SignUpForm />
      <LoginForm />
    </>
  )
}

export default UnAuthenticatedApp

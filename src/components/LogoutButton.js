import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../reducers/loginReducer'

function LogoutButton() {
  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(logout())
  }
  return <button onClick={logOutHandler}>Log out</button>
}

export default LogoutButton

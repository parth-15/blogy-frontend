import React from 'react'
import {useDispatch} from 'react-redux'
import {logout} from '../reducers/loginReducer'
import {useHistory} from 'react-router-dom'

function LogoutButton({to}) {
  const dispatch = useDispatch()
  const history = useHistory()

  const logOutHandler = () => {
    dispatch(logout())
    const loginPath = '/login'
    history.push(loginPath)
  }
  return (
    <button onClick={logOutHandler} to={to}>
      Log out
    </button>
  )
}

export default LogoutButton

import React from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {logout} from '../reducers/loginReducer'
import {Button} from '@chakra-ui/react'

function LogoutButton() {
  const dispatch = useDispatch()
  const history = useHistory()

  const logOutHandler = () => {
    dispatch(logout())
    const loginPath = '/login'
    history.push(loginPath)
  }
  return (
    <Button onClick={logOutHandler} size="lg" colorScheme="teal">
      Log out
    </Button>
  )
}

export default LogoutButton

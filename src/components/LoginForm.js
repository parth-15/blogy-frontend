import {Button, FormControl, FormLabel, Heading, Input} from '@chakra-ui/react'
import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../reducers/loginReducer'
import {
  setErrorNotification,
  setInfoNotification,
} from '../reducers/notificationReducer'
import Notification from './Notification'

function LoginForm() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()

  const handleLoginFormSubmit = async e => {
    e.preventDefault()
    try {
      dispatch(login(username, password))
      dispatch(setInfoNotification('Login Successful', 2))
    } catch (e) {
      dispatch(setErrorNotification('Wrong username or password', 5))
    }
  }

  return (
    <>
      <Heading as="h2" size="lg">
        Log in to application
      </Heading>
      <Notification />

      <form onSubmit={handleLoginFormSubmit}>
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Log In
        </Button>
      </form>
    </>
  )
}

export default LoginForm

import {Button, FormControl, FormLabel, Heading, Input} from '@chakra-ui/react'
import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../reducers/loginReducer'
import {
  setErrorNotification,
  setInfoNotification,
} from '../reducers/notificationReducer'
import {VStack, Box} from '@chakra-ui/react'

function LoginForm() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()

  const handleLoginFormSubmit = async e => {
    e.preventDefault()
    try {
      await dispatch(login(username, password))
      dispatch(setInfoNotification('Login Successful', 2))
    } catch (e) {
      dispatch(setErrorNotification('Wrong username or password', 5))
    }
  }

  return (
    <>
      <VStack py={5}>
        <Heading as="h2" size="lg">
          Log in to application
        </Heading>

        <Box w="40%" py={5} px={14}>
          <form onSubmit={handleLoginFormSubmit}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
              />
            </FormControl>

            <FormControl py={5} id="password" isRequired>
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
        </Box>
      </VStack>
    </>
  )
}

export default LoginForm

import React from 'react'
import {Button, FormControl, FormLabel, Heading, Input} from '@chakra-ui/react'
import {registerUser} from '../reducers/loginReducer'
import {
  setErrorNotification,
  setInfoNotification,
} from '../reducers/notificationReducer'
import {useDispatch} from 'react-redux'
import Notification from './Notification'
import {useHistory} from 'react-router-dom'
import {Stack, HStack, VStack, Box} from '@chakra-ui/react'

function SignUpForm() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const onSignUpSubmit = async event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      dispatch(setErrorNotification('Password in two fields should match', 5))
      return
    }
    try {
      await dispatch(registerUser(username, password, name))
      dispatch(setInfoNotification('Successfully signed up', 2))
      history.push('/login')
    } catch (error) {
      dispatch(setErrorNotification('User exists or something went wrong', 5))
    }
  }

  return (
    <>
      <VStack py={5}>
        <Heading as="h2" size="lg">
          Signup to the Application
        </Heading>

        <Box width="40%" py={5} px={5}>
          <form onSubmit={onSignUpSubmit}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                type="text"
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="username" py={5} isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Username"
                type="text"
                onChange={e => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="confirm-password" py={5} isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                placeholder="Confirm Password"
                type="password"
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Sign up
            </Button>
          </form>
        </Box>
      </VStack>
    </>
  )
}

export default SignUpForm

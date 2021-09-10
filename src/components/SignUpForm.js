import React from 'react'
import {registerUser} from '../reducers/loginReducer'
import {setErrorNotification} from '../reducers/notificationReducer'
import {useDispatch} from 'react-redux'

function SignUpForm() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const dispatch = useDispatch()

  const onSignUpSubmit = async event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      dispatch(setErrorNotification('Password in two fields should match', 5))
    }
    try {
      await dispatch(registerUser(username, password, name))
    } catch (error) {
      dispatch(setErrorNotification('User exists or something went wrong', 5))
    }
  }

  return (
    <form onSubmit={onSignUpSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          name="name"
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          value={username}
          name="username"
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  )
}

export default SignUpForm

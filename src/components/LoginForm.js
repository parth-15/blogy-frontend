import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../reducers/loginReducer'
import {setErrorNotification} from '../reducers/notificationReducer'

function LoginForm() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()

  const handleLoginFormSubmit = async e => {
    e.preventDefault()
    try {
      dispatch(login(username, password))
    } catch (e) {
      dispatch(setErrorNotification('Wrong username or password', 5))
    }
  }

  return (
    <>
      <h2>Log in to application</h2>
      <form onSubmit={handleLoginFormSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default LoginForm

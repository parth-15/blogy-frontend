import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import blogService from './services/Blog'
import loginService from './services/Login'
import TogglableBlogCreateForm from './components/TogglableBlogCreateForm'
import AllBlogs from './components/AllBlogs'
import Notification from './components/Notification'
import {setErrorNotification} from './reducers/notificationReducer'

function App() {
  const [user, setUser] = React.useState(null)
  const [blogs, setBlogs] = React.useState([])
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()

  React.useEffect(() => {
    blogService.getAllBlogs().then(blogs => setBlogs(blogs))
  }, [])

  React.useEffect(() => {
    const userString = window.localStorage.getItem('user')
    if (userString) {
      const userString = window.localStorage.getItem('user')
      const user = JSON.parse(userString)
      setUser(user)
      console.log('User is ', user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLoginFormSubmit = async e => {
    e.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password,
      })
      setUser(user)
      window.localStorage.setItem('user', JSON.stringify(user))
      blogService.setToken(user.token)
    } catch (e) {
      dispatch(setErrorNotification('Wrong username or password', 5))
    }
  }

  const logOutHandler = () => {
    window.localStorage.removeItem('user')
    setUser(null)
  }

  if (user === null) {
    return (
      <>
        <Notification />
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
  return (
    <>
      <Notification />
      {/* {notification && <h1>{notification}</h1>} */}
      <h1>{user.username} logged in</h1>
      <button onClick={logOutHandler}>Log out</button>
      <TogglableBlogCreateForm />
      <AllBlogs blogs={blogs} />
    </>
  )
}

export default App

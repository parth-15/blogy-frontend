import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import blogService from './services/Blog'
import loginService from './services/Login'
import TogglableBlogCreateForm from './components/TogglableBlogCreateForm'
import AllBlogs from './components/AllBlogs'
import Notification from './components/Notification'
import {setErrorNotification} from './reducers/notificationReducer'
import {getAllBlogs} from './reducers/blogReducer'
import {getUserInfo, login, logout} from './reducers/loginReducer'

function App() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.login)

  React.useEffect(() => {
    dispatch(getAllBlogs())
  }, [])

  React.useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  const handleLoginFormSubmit = async e => {
    e.preventDefault()
    try {
      dispatch(login(username, password))
    } catch (e) {
      dispatch(setErrorNotification('Wrong username or password', 5))
    }
  }

  const logOutHandler = () => {
    dispatch(logout())
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

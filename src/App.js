import React from 'react'
import blogService from './services/Blog'
import loginService from './services/Login'
import Blog from './components/Blog'
import BlogCreateForm from './components/BlogCreateForm'

function App() {
  const [user, setUser] = React.useState(null)
  const [blogs, setBlogs] = React.useState([])
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [notification, setNotification] = React.useState(null)

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
      setNotification('Wrong username or password')
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

  const logOutHandler = () => {
    window.localStorage.removeItem('user')
    setUser(null)
  }

  if (user === null) {
    return (
      <>
        {notification && <h1>{notification}</h1>}
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
      {notification && <h1>{notification}</h1>}
      <h1>{user.username} logged in</h1>
      <button onClick={logOutHandler}>Log out</button>
      <BlogCreateForm setNotification={setNotification} />
      <h2>Blogs</h2>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </>
  )
}

export default App

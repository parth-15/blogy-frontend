import React from 'react'
import {useSelector} from 'react-redux'
import AuthenticatedApp from './components/AuthenticatedApp'
import UnAuthenticatedApp from './components/UnAuthenticatedApp'
import {Switch, Route} from 'react-router-dom'
import AllUsers from './components/AllUsers'
import AllBlogs from './components/AllBlogs'
import Header from './components/Header'
import Blog from './components/Blog'
import User from './components/User'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

function App() {
  const user = useSelector(state => state.login)

  if (user === null) {
    return (
      <>
        <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/" component={UnAuthenticatedApp} />
        </Switch>
      </>
    )
  }
  return (
    <>
      <Header />
      <Switch>
        <Route path="/blogs/:id" component={Blog} />
        <Route path="/users/:id" component={User} />
        <Route path="/users" component={AllUsers} />
        <Route path="/blogs" component={AllBlogs} />
        <Route path="/" component={AuthenticatedApp} />
      </Switch>
    </>
  )
}

export default App

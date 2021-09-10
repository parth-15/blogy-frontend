import React from 'react'
import {useSelector} from 'react-redux'
import AuthenticatedApp from './components/AuthenticatedApp'
import {Switch, Route} from 'react-router-dom'
import AllUsers from './components/AllUsers'
import AllBlogs from './components/AllBlogs'
import AuthenticatedHeader from './components/AuthenticatedHeader'
import Blog from './components/Blog'
import User from './components/User'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import UnAuthenticatedHeader from './components/UnAuthenticatedHeader'
import Notification from './components/Notification'

function App() {
  const user = useSelector(state => state.login)

  if (user === null) {
    return (
      <>
        <UnAuthenticatedHeader />
        <Notification />
        <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </>
    )
  }
  return (
    <>
      <AuthenticatedHeader />
      <Notification />
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

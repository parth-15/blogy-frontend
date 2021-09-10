import React from 'react'
import {useHistory} from 'react-router'
import {useSelector, useDispatch} from 'react-redux'
import TogglableBlogCreateForm from './TogglableBlogCreateForm'
import AllBlogs from './AllBlogs'
import Notification from './Notification'
import LogoutButton from './LogoutButton'
import {getAllBlogs} from '../reducers/blogReducer'
import {getUserInfo} from '../reducers/loginReducer'
import AllUsers from './AllUsers'
import Header from './Header'

function AuthenticatedApp() {
  const loggedUser = useSelector(state => state.login)
  const dispatch = useDispatch()
  const history = useHistory()

  // React.useEffect(() => {
  //   dispatch(getAllBlogs())
  // }, [])

  React.useEffect(() => {
    dispatch(getUserInfo())
    history.push('/')
  }, [])

  return (
    <>
      {/* <Notification />
      <h1>{loggedUser.username} logged in</h1>
      <LogoutButton /> */}
      <TogglableBlogCreateForm />
      <AllBlogs />
      <AllUsers />
    </>
  )
}

export default AuthenticatedApp

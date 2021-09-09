import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import TogglableBlogCreateForm from './TogglableBlogCreateForm'
import AllBlogs from './AllBlogs'
import Notification from './Notification'
import LogoutButton from './LogoutButton'
import {getAllBlogs} from '../reducers/blogReducer'
import {getUserInfo} from '../reducers/loginReducer'
import AllUsers from './AllUsers'
import {getAllUsers} from '../reducers/userReducer'

function AuthenticatedApp() {
  const loggedUser = useSelector(state => state.login)
  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllBlogs())
  }, [])

  React.useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  React.useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <>
      <Notification />
      <h1>{loggedUser.username} logged in</h1>
      <LogoutButton />
      <TogglableBlogCreateForm />
      <AllBlogs blogs={blogs} />
      <AllUsers />
    </>
  )
}

export default AuthenticatedApp

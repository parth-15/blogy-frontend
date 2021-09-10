import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router'
import AllBlogs from './AllBlogs'
import AllUsers from './AllUsers'
import TogglableBlogCreateForm from './TogglableBlogCreateForm'

function AuthenticatedApp() {
  const history = useHistory()

  React.useEffect(() => {
    history.push('/')
  }, [])

  return (
    <>
      <TogglableBlogCreateForm />
      <AllBlogs />
      <AllUsers />
    </>
  )
}

export default AuthenticatedApp

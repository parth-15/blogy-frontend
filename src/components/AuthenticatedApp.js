import React from 'react'
import {useHistory} from 'react-router'
import AllBlogs from './AllBlogs'
import AllUsers from './AllUsers'
import BlogCreateForm from './BlogCreateForm'
import Notification from './Notification'

function AuthenticatedApp() {
  const history = useHistory()

  React.useEffect(() => {
    history.push('/')
  }, [])

  return (
    <>
      <BlogCreateForm />
      {/* <Notification /> */}

      <AllBlogs />
    </>
  )
}

export default AuthenticatedApp

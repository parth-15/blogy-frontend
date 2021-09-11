import React from 'react'
import {useHistory} from 'react-router'
import AllBlogs from './AllBlogs'
import AllUsers from './AllUsers'
import BlogCreateForm from './BlogCreateForm'

function AuthenticatedApp() {
  const history = useHistory()

  React.useEffect(() => {
    history.push('/')
  }, [])

  return (
    <>
      <BlogCreateForm />
      <AllBlogs />
      <AllUsers />
    </>
  )
}

export default AuthenticatedApp

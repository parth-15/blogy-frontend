import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useRouteMatch} from 'react-router-dom'
import {getAllUsers} from '../reducers/userReducer'
import Blog from './Blog'

function User({user}) {
  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.users)
  const match = useRouteMatch('/users/:id')
  const userToDisplay = match
    ? allUsers.find(user => user.id === match.params.id)
    : user

  React.useEffect(() => {
    if (userToDisplay) {
      return
    }
    dispatch(getAllUsers())
  }, [])

  if (!userToDisplay) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Name: {userToDisplay.name}</h1>
      <div>Username: {userToDisplay.username}</div>
      <div>No. of Blogs: {userToDisplay.blogs.length}</div>
      {match &&
        userToDisplay.blogs.map(blog => (
          <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <Blog blog={blog} />
          </Link>
        ))}
    </>
  )
}

export default User

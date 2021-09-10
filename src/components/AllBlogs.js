import React, {useState} from 'react'
import TogglableBlog from './TogglableBlog'
import {useSelector, useDispatch} from 'react-redux'
import {getAllBlogs} from '../reducers/blogReducer'
import {Link} from 'react-router-dom'

function AllBlogs() {
  const blogs = useSelector(state => state.blogs)
  const [blogsToDisplay, setBlogsToDisplay] = React.useState(blogs)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllBlogs())
  }, [])

  React.useEffect(() => {
    setBlogsToDisplay(blogs)
  }, [blogs])

  const sortByLikes = () => {
    setBlogsToDisplay([
      ...blogsToDisplay.sort((blog1, blog2) => blog1.likes - blog2.likes),
    ])
  }
  return (
    <>
      <h2>Blogs</h2>
      <button onClick={sortByLikes}>Sort by Likes</button>
      {blogsToDisplay.map(blog => (
        <Link key={blog.id} to={`/blogs/${blog.id}`}>
          <TogglableBlog blog={blog} />
        </Link>
      ))}
    </>
  )
}
export default AllBlogs

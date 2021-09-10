import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllBlogs} from '../reducers/blogReducer'
import TogglableBlog from './TogglableBlog'

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

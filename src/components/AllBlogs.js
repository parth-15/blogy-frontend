import React from 'react'
import TogglableBlog from './TogglableBlog'

function AllBlogs({blogs}) {
  const [blogsToDisplay, setBlogsToDisplay] = React.useState(blogs)

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
        <TogglableBlog key={blog.id} blog={blog} />
      ))}
    </>
  )
}
export default AllBlogs

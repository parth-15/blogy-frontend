import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import {getAllBlogs, likeBlog} from '../reducers/blogReducer'

//TODO: Add delete blog functionality

function Blog({blog}) {
  const dispatch = useDispatch()
  const allBlogs = useSelector(state => state.blogs)
  const match = useRouteMatch('/blogs/:id')
  const blogToDisplay = match
    ? allBlogs.find(blog => blog.id === match.params.id)
    : blog

  React.useEffect(() => {
    if (blogToDisplay) {
      return
    }
    dispatch(getAllBlogs())
  }, [])

  const onLikeHandler = async () => {
    dispatch(likeBlog(blogToDisplay))
  }

  if (!blogToDisplay) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>Title - {blogToDisplay.title}</h2>
      <p>Author - {blogToDisplay.author}</p>
      <p>URL - {blogToDisplay.url}</p>
      <p>Likes - {blogToDisplay.likes}</p>
      <button onClick={onLikeHandler}>Like</button>
    </>
  )
}

export default Blog

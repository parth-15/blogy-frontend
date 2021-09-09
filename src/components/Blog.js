import React from 'react'
import blogService from '../services/Blog'
import {likeBlog} from '../reducers/blogReducer'
import {useDispatch} from 'react-redux'

//TODO: Add delete blog functionality

function Blog({blog}) {
  const dispatch = useDispatch()

  const onLikeHandler = async () => {
    dispatch(likeBlog(blog))
  }

  return (
    <>
      <h2>Title - {blog.title}</h2>
      <p>Author - {blog.author}</p>
      <p>URL - {blog.url}</p>
      <p>Likes - {blog.likes}</p>
      <button onClick={onLikeHandler}>Like</button>
    </>
  )
}

export default Blog

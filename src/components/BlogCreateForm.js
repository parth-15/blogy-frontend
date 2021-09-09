import React from 'react'
import {useDispatch} from 'react-redux'
import blogService from '../services/Blog'
import {
  setErrorNotification,
  setInfoNotification,
} from '../reducers/notificationReducer'

function BlogCreateForm() {
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [url, setUrl] = React.useState('')
  const dispatch = useDispatch()

  const addBlogHandler = async e => {
    e.preventDefault()
    try {
      await blogService.createNewBlog({title, author, url})
      dispatch(setInfoNotification(`New blog added by ${author}`, 5))
    } catch (e) {
      dispatch(setErrorNotification('Something went wrong while blog creation'))
    } finally {
      setTitle('')
      setAuthor('')
      setUrl('')
    }
  }

  return (
    <form onSubmit={addBlogHandler}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </label>
      <label>
        Url:
        <input
          type="text"
          name="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
      </label>
      <button type="submit">Create Blog</button>
    </form>
  )
}

export default BlogCreateForm

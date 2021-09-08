import React from 'react'
import blogService from '../services/Blog'

function BlogCreateForm({setNotification}) {
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [url, setUrl] = React.useState('')

  const addBlogHandler = async e => {
    e.preventDefault()
    await blogService.createNewBlog({title, author, url})
    setNotification(`New blog added by ${author}`)
    setTimeout(() => {
      setNotification('')
    }, 5000)
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

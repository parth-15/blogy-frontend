import React from 'react'
import blogService from '../services/Blog'

function Blog({blog}) {
  const [blogToDisplay, setBlogToDisplay] = React.useState(blog)

  const onLikeHandler = async () => {
    const newBlogToDisplay = {...blogToDisplay, likes: blogToDisplay.likes + 1}
    setBlogToDisplay(newBlogToDisplay)
    await blogService.updateBlog(newBlogToDisplay)
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

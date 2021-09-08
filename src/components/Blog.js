import React from 'react'

function Blog({blog}) {
  return (
    <>
      <h2>Title - {blog.title}</h2>
      <p>Author - {blog.author}</p>
      <p>URL - {blog.url}</p>
      <p>Likes - {blog.likes}</p>
    </>
  )
}

export default Blog

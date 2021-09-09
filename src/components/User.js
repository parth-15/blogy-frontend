import React from 'react'

function User(props) {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <div>Username: {props.username}</div>
      <div>No. of Blogs: {props.blogs.length}</div>
    </>
  )
}

export default User

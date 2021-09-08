import React from 'react'
import Togglable from './Togglable'
import BlogCreateForm from './BlogCreateForm'

function TogglableBlogCreateForm(props) {
  return (
    <Togglable buttonLabel={'New Blog'}>
      <BlogCreateForm {...props} />
    </Togglable>
  )
}

export default TogglableBlogCreateForm

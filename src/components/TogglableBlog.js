import React from 'react'
import Togglable from './Togglable'
import Blog from './Blog'

function TogglableBlog(props) {
  return (
    <Togglable buttonLabel={'View Blog'} defaultVisible={true}>
      <Blog {...props} />
    </Togglable>
  )
}

export default TogglableBlog

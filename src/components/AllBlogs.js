import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllBlogs} from '../reducers/blogReducer'
import Blog from './Blog'
import TogglableBlog from './TogglableBlog'
import {Box, Icon, Heading, Center, Text, Button} from '@chakra-ui/react'

function AllBlogs() {
  const blogs = useSelector(state => state.blogs)
  const [blogsToDisplay, setBlogsToDisplay] = React.useState(blogs)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllBlogs())
  }, [])

  React.useEffect(() => {
    setBlogsToDisplay(blogs)
  }, [blogs])

  const sortByLikes = () => {
    setBlogsToDisplay([
      ...blogsToDisplay.sort((blog1, blog2) => blog2.likes - blog1.likes),
    ])
  }
  return (
    <>
      <Button colorScheme="teal" onClick={sortByLikes}>
        Sort by Likes
      </Button>
      {blogsToDisplay.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </>
  )
}
export default AllBlogs

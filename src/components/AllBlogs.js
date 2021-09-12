import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllBlogs} from '../reducers/blogReducer'
import Blog from './Blog'
import TogglableBlog from './TogglableBlog'
import {Box, Stack, VStack, Center, Text, Button} from '@chakra-ui/react'

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
      <Stack color="white" mr={100}>
        <Center>
          <Button colorScheme="teal" onClick={sortByLikes} m={5}>
            Sort by Likes
          </Button>
        </Center>
        {/* <Center> */}
        <VStack spacing={4} align="stretch">
          {blogsToDisplay.map(blog => (
            <Link key={blog.id} to={`/blogs/${blog.id}`}>
              <Blog blog={blog} />
            </Link>
          ))}
        </VStack>
        {/* </Center> */}
      </Stack>
    </>
  )
}
export default AllBlogs

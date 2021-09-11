import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouteMatch, Link, useHistory} from 'react-router-dom'
import {getAllBlogs, likeBlog} from '../reducers/blogReducer'
import {HStack, Stack, Heading, Center, Text, Button} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'

//TODO: Add delete blog functionality

function Blog({blog}) {
  const dispatch = useDispatch()
  const history = useHistory()
  const allBlogs = useSelector(state => state.blogs)
  const match = useRouteMatch('/blogs/:id')
  const blogToDisplay = match
    ? allBlogs.find(blog => blog.id === match.params.id)
    : blog

  React.useEffect(() => {
    if (blogToDisplay) {
      return
    }
    dispatch(getAllBlogs())
  }, [])

  const onLikeHandler = async () => {
    dispatch(likeBlog(blogToDisplay))
  }

  const onCloseHandler = () => {
    history.push('/')
  }

  if (!blogToDisplay) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <Center pt={4}>
        <Stack
          p={4}
          color="gray.600"
          shadow="md"
          borderWidth="5px"
          width="50%"
          // border="black"
        >
          <Link to={`/blogs/${blogToDisplay.id}`}>
            <Heading as="h2" size="lg">
              {blogToDisplay.title}
            </Heading>
            <Text fontSize="md">Author: {blogToDisplay.author}</Text>
            <Text>Likes: {blogToDisplay.likes}</Text>
            {match && (
              <>
                <HStack>
                  <Text>URL: {blogToDisplay.url}</Text>
                  <ExternalLinkIcon />
                </HStack>
                <Button colorScheme="teal" onClick={onLikeHandler}>
                  Like
                </Button>
              </>
            )}
          </Link>
          {match && (
            <Button colorScheme="teal" ml={5} onClick={onCloseHandler}>
              Close
            </Button>
          )}
        </Stack>
      </Center>
    </>
  )
}

export default Blog

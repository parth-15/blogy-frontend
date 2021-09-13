import React from 'react'
import {useDispatch} from 'react-redux'
import {createNewBlog} from '../reducers/blogReducer'
import {
  setErrorNotification,
  setInfoNotification,
} from '../reducers/notificationReducer'
import {Box, FormControl, Input, Button, Center} from '@chakra-ui/react'

function BlogCreateForm() {
  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [url, setUrl] = React.useState('')
  const dispatch = useDispatch()
  const [visible, setVisible] = React.useState(false)

  const toggleVisibility = () => setVisible(visible => !visible)

  const addBlogHandler = async e => {
    e.preventDefault()
    try {
      // await blogService.createNewBlog({title, author, url})
      await dispatch(createNewBlog({title, author, url}))
      dispatch(setInfoNotification(`New blog added by ${author}`, 5))
    } catch (e) {
      dispatch(
        setErrorNotification('Something went wrong while blog creation', 5),
      )
    } finally {
      setTitle('')
      setAuthor('')
      setUrl('')
    }
  }

  return (
    <>
      <Center py={5} mr={15} style={{display: visible ? '' : 'none'}}>
        <Box w="30%">
          <form onSubmit={addBlogHandler}>
            <FormControl id="title" isRequired>
              <Input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl id="author" py={5} isRequired>
              <Input
                type="text"
                placeholder="Author"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
            </FormControl>

            <FormControl id="url" isRequired>
              <Input
                type="url"
                placeholder="Url"
                value={url}
                onChange={e => setUrl(e.target.value)}
              />
            </FormControl>

            <Center>
              <Button type="submit" colorScheme="teal" mt={5}>
                Create
              </Button>

              <Button
                colorScheme="teal"
                ml={10}
                mt={5}
                onClick={toggleVisibility}
              >
                Cancel
              </Button>
            </Center>
          </form>
        </Box>
      </Center>
      <Center mr={100}>
        <Button
          style={{display: visible ? 'none' : ''}}
          onClick={toggleVisibility}
          colorScheme="teal"
          my={5}
        >
          Create Blog
        </Button>
      </Center>
    </>
  )
}

export default BlogCreateForm

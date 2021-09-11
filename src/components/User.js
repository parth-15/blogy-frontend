import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useRouteMatch, useHistory} from 'react-router-dom'
import {getAllUsers} from '../reducers/userReducer'
import Blog from './Blog'
import {Box, Icon, Heading, Center, Text, Button} from '@chakra-ui/react'

function User({user}) {
  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.users)
  const match = useRouteMatch('/users/:id')
  const userToDisplay = match
    ? allUsers.find(user => user.id === match.params.id)
    : user
  const history = useHistory()

  React.useEffect(() => {
    if (userToDisplay) {
      return
    }
    dispatch(getAllUsers())
  }, [])

  if (!userToDisplay) {
    return <h1>Loading...</h1>
  }

  const onCloseHandler = () => {
    history.push('/users')
  }

  return (
    <>
      <Box p={4} color="gray.600" shadow="md" borderWidth="2px">
        <Heading as="h3" size="md">
          Name: {userToDisplay.name}
        </Heading>
        <Text>Username: {userToDisplay.username}</Text>
        <Text pb={15}>Blog Count: {userToDisplay.blogs.length}</Text>
        {match && (
          <Button colorScheme="teal" onClick={onCloseHandler}>
            Close
          </Button>
        )}
        {match &&
          userToDisplay.blogs.map(blog => (
            <Link key={blog.id} to={`/blogs/${blog.id}`}>
              <Blog blog={blog} />
            </Link>
          ))}
      </Box>
    </>
  )
}

export default User

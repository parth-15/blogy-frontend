import {
  HStack,
  Image,
  Flex,
  Box,
  Spacer,
  Button,
  Avatar,
} from '@chakra-ui/react'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {getUserInfo} from '../reducers/loginReducer'
import blogyLogo from '../static/BlogyLogo.png'
import LogoutButton from './LogoutButton'

function AuthenticatedHeader() {
  const loggedUser = useSelector(state => state.login)
  const dispatch = useDispatch()
  const history = useHistory()

  React.useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  const goToHomePage = () => {
    history.push('/')
  }

  return (
    <>
      <Flex bg="gray.100" align="center">
        <Box>
          <Image
            src={blogyLogo}
            boxSize="100px"
            alt="Blogy Logo"
            onClick={goToHomePage}
          />
        </Box>
        <Spacer />
        <Box p="4">
          <HStack spacing="24px">
            <Button size="lg" colorScheme="teal">
              <Link to="/blogs">Blogs</Link>
            </Button>
            <Button size="lg" colorScheme="teal">
              <Link to="/users">Users</Link>
            </Button>
          </HStack>
        </Box>
        <Spacer />
        <Box p="4">
          <HStack spacing="24px">
            <Avatar
              name={loggedUser.name}
              src="https://bit.ly/broken-link"
              bg="teal"
            />
            <LogoutButton />
          </HStack>
        </Box>
      </Flex>
    </>
  )
}

export default AuthenticatedHeader

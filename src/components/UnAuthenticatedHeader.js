import {HStack, Image, Flex, Box, Spacer, Button} from '@chakra-ui/react'
import React from 'react'
import blogyLogo from '../static/BlogyLogo.png'
import {Link} from 'react-router-dom'

function UnAuthenticatedHeader() {
  return (
    <>
      <Flex bg="gray.100" align="center">
        <Box mx="3em">
          <Image src={blogyLogo} boxSize="100px" alt="Blogy Logo" />
        </Box>
        <Spacer maxWidth="25vw" />
        <Box p="4">
          <HStack spacing="24px">
            <Button size="lg" colorScheme="teal">
              <Link to="/login">Login</Link>
            </Button>
            <Button size="lg" colorScheme="teal">
              <Link to="/signup">SignUp</Link>
            </Button>
          </HStack>
        </Box>
        <Spacer />
      </Flex>
    </>
  )
}

export default UnAuthenticatedHeader

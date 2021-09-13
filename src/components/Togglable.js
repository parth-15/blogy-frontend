import React from 'react'
import {Button} from '@chakra-ui/react'

function Togglable({buttonLabel, children, defaultVisible = false}) {
  const [visible, setVisible] = React.useState(defaultVisible)

  const toggleVisibility = () => setVisible(visible => !visible)

  return (
    <>
      <div style={{display: visible ? 'none' : ''}}>
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>
      <div style={{display: visible ? '' : 'none'}}>
        {children}
        <Button colorScheme="teal" onClick={toggleVisibility}>
          Cancel
        </Button>
      </div>
    </>
  )
}

export default Togglable

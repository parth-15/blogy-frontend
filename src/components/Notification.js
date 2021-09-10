import React from 'react'
import {useSelector} from 'react-redux'
import {Alert, AlertIcon} from '@chakra-ui/react'

function Notification() {
  const notification = useSelector(state => state.notification)
  if (!notification) {
    return null
  }

  if (notification.info) {
    return (
      <Alert status="success" variant="subtle">
        <AlertIcon />
        {notification.info}
      </Alert>
    )
  }
  if (notification.error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {notification.error}{' '}
      </Alert>
    )
  }
  return null
}

export default Notification

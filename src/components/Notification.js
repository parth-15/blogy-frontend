import React from 'react'
import {useSelector} from 'react-redux'

function Notification() {
  const notification = useSelector(state => state.notification)
  if (!notification) {
    return null
  }

  if (notification.info) {
    return <h2>Info - {notification.info}</h2>
  }
  if (notification.error) {
    return <h2>Error - {notification.error}</h2>
  }
  return null
}

export default Notification

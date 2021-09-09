import React from 'react'
import {useSelector} from 'react-redux'
import User from './User'
import {getAllUsers} from '../reducers/userReducer'
import {useDispatch} from 'react-redux'

function AllUsers() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return users.map(user => (
    <User
      key={user.id}
      name={user.name}
      username={user.username}
      blogs={user.blogs}
    />
  ))
}

export default AllUsers

import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import User from './User'
import {getAllUsers} from '../reducers/userReducer'
import {Link} from 'react-router-dom'

function AllUsers() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return users.map(user => (
    <Link key={user.id} to={`/users/${user.id}`}>
      <User user={user} />
    </Link>
  ))
}

export default AllUsers

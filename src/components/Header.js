import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {getUserInfo} from '../reducers/loginReducer'
import LogoutButton from './LogoutButton'

function Header() {
  const loggedUser = useSelector(state => state.login)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  return (
    <>
      <Link to="/blogs">Blogs</Link>
      <Link to="/users">Users</Link>
      <span>{loggedUser.username} logged in</span>
      <LogoutButton />
    </>
  )
}

export default Header

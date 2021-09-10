import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import LogoutButton from './LogoutButton'
import {getUserInfo} from '../reducers/loginReducer'

function Header() {
  const loggedUser = useSelector(state => state.login)
  const dispatch = useDispatch(0)

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

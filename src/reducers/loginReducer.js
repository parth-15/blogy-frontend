import loginService from '../services/Login'
import blogService from '../services/Blog'
import userService from '../services/User'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const GET_USER_INFO = 'GET_USER_INFO'
const REGISTER_USER = 'REGISTER_USER'

const loggedUserString = window.localStorage.getItem('user')
const initialState = loggedUserString ? JSON.parse(loggedUserString) : null

const loginReducer = (state = initialState, action) => {
  if (action.type === LOGIN) {
    return action.data
  }
  if (action.type === GET_USER_INFO) {
    return action.data
  }
  if (action.type === REGISTER_USER) {
    return null
  }
  if (action.type === LOGOUT) {
    return null
  }
  return state
}

export const login = (username, password) => {
  return async dispatch => {
    const user = await loginService.login({username, password})
    window.localStorage.setItem('user', JSON.stringify(user))
    blogService.setToken(user.token)
    dispatch({
      type: LOGIN,
      data: user,
    })
  }
}

export const registerUser = (username, password, name) => {
  return async dispatch => {
    await userService.registerUser({username, password, name})
    dispatch({
      type: REGISTER_USER,
    })
  }
}

export const getUserInfo = () => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  blogService.setToken(user.token)
  return {
    type: GET_USER_INFO,
    data: user,
  }
}

export const logout = () => {
  window.localStorage.removeItem('user')
  return {
    type: LOGOUT,
  }
}

export default loginReducer

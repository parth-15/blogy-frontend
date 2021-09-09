import userService from '../services/User'

const GET_ALL_USERS = 'GET_ALL_USERS'

const initialState = []

const userReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_USERS) {
    return action.data
  }
  return state
}

export const getAllUsers = () => {
  return async dispatch => {
    const users = await userService.getAllUsers()
    dispatch({
      type: GET_ALL_USERS,
      data: users,
    })
  }
}

export default userReducer

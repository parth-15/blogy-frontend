import axios from 'axios'

const baseUrl = '/api/users/'

const getAllUsers = async () => {
  const response = await axios.get(baseUrl)
  console.log('GET_ALL_USERS', response.data)
  return response.data
}

const registerUser = async userInfo => {
  const response = await axios.post(baseUrl, userInfo)
  console.log('REGISTER_ONE_USER', response.data)
  return response.data
}

export default {getAllUsers, registerUser}

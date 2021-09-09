import axios from 'axios'

const baseUrl = '/api/users/'

const getAllUsers = async () => {
  const response = await axios.get(baseUrl)
  console.log('GET_ALL_USERS', response.data)
  return response.data
}

export default {getAllUsers}

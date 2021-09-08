import axios from 'axios'

const baseUrl = '/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  console.log('POST_LOGIN_CREDENTIALS', response.data)
  return response.data
}

export default {login}

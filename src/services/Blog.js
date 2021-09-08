import axios from 'axios'

const baseUrl = '/api/blogs'
let token = null

const getAllBlogs = async () => {
  const response = await axios.get(baseUrl)
  console.log('GET_ALL_BLOGS', response)
  return response.data
}

const setToken = newToken => {
  token = `bearer ${newToken}`
  console.log('Token set to', token)
}

const createNewBlog = async newBlog => {
  const config = {
    headers: {Authorization: token},
  }
  const response = await axios.post(baseUrl, newBlog, config)
  console.log('POST_ONE_BLOG', response)
  return response.data
}

export default {getAllBlogs, setToken, createNewBlog}

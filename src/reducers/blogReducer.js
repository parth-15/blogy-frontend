import blogService from '../services/Blog'

const GET_ALL_BLOGS = 'GET_ALL_BLOGS'
const CREATE_NEW_BLOG = 'CREATE_NEW_BLOG'
const LIKE_BLOG = 'LIKE_BLOG'

const initialState = []

const blogReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_BLOGS) {
    return action.data
  }
  if (action.type === CREATE_NEW_BLOG) {
    return [...state, action.data]
  }
  if (action.type === LIKE_BLOG) {
    const {id} = action.data
    const likedBlog = state.find(blog => blog.id === id)
    const updatedBlog = {
      ...likedBlog,
      likes: likedBlog.likes + 1,
    }
    return state.map(blog => (blog.id === id ? updatedBlog : blog))
  }
  return state
}

export const getAllBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAllBlogs()
    dispatch({
      type: GET_ALL_BLOGS,
      data: blogs,
    })
  }
}

export const createNewBlog = data => {
  return async dispatch => {
    const createdBlog = await blogService.createNewBlog(data)
    dispatch({
      type: CREATE_NEW_BLOG,
      data: createdBlog,
    })
  }
}

export const likeBlog = blog => {
  return async dispatch => {
    await blogService.updateBlog({...blog, likes: blog.likes + 1})
    dispatch({
      type: LIKE_BLOG,
      data: {
        id: blog.id,
      },
    })
  }
}

// export const deleteBlog = blog => {
//   return
// }

export default blogReducer

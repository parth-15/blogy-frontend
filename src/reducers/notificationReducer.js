const REMOVE_MESSAGE = 'REMOVE_MESSAGE'
const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE'
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

const initialState = {info: null, error: null}

const notificationReducer = (state = initialState, action) => {
  if (action.type === SET_INFO_MESSAGE) {
    // clearTimeout(action.data.delay)
    return {
      ...state,
      info: action.data.info,
    }
  }
  if (action.type === SET_ERROR_MESSAGE) {
    // clearTimeout(action.data.delay)
    return {
      ...state,
      error: action.data.error,
    }
  }
  if (action.type === REMOVE_MESSAGE) {
    return initialState
  }
  return state
}

export const setInfoNotification = (info, delayInSeconds) => {
  return async dispatch => {
    dispatch({
      type: SET_INFO_MESSAGE,
      data: {
        info: info,
        delay: setTimeout(() => {
          dispatch(removeNotification())
        }, delayInSeconds * 1000),
      },
    })
  }
}

export const setErrorNotification = (error, delayInSeconds) => {
  return async dispatch => {
    dispatch({
      type: SET_ERROR_MESSAGE,
      data: {
        error: error,
        delay: setTimeout(() => {
          dispatch(removeNotification())
        }, delayInSeconds * 1000),
      },
    })
  }
}

export const removeNotification = () => {
  return {
    type: REMOVE_MESSAGE,
  }
}

export default notificationReducer

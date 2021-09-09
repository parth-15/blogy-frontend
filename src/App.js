import React from 'react'
import {useSelector} from 'react-redux'
import AuthenticatedApp from './components/AuthenticatedApp'
import UnAuthenticatedApp from './components/UnAuthenticatedApp'

function App() {
  const user = useSelector(state => state.login)

  if (user === null) {
    return <UnAuthenticatedApp />
  }
  return <AuthenticatedApp />
}

export default App

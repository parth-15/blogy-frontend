import React from 'react'

function Togglable({buttonLabel, children, defaultVisible = false}) {
  const [visible, setVisible] = React.useState(defaultVisible)

  const toggleVisibility = () => setVisible(visible => !visible)

  return (
    <>
      <div style={{display: visible ? 'none' : ''}}>
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>
      <div style={{display: visible ? '' : 'none'}}>
        {children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </>
  )
}

export default Togglable

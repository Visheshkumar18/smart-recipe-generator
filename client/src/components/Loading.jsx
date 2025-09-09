import React from 'react'

const Loading = (props) => {
  return (
    <div>
         <span className={`loading loading-ring loading-${props.size}`}></span>
    </div>
  )
}

export default Loading
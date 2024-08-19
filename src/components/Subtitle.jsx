import React from 'react'

const Subtitle = ({children, className="",...props}) => {

  return (
    <p className={`subtitle ${className} `} {...props} >
        {children}
    </p>
  )
}

export default Subtitle
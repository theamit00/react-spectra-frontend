import React from 'react'

const Description = ({children, ...props}) => {
  return (
    <p {...props}>
        {children}
    </p>
  )
}

export default Description
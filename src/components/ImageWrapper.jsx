import React from 'react'

const ImageWrapper = ({children, className = "", ...props}) => {
  return (
    <div className={`imageWrapper ${className}`} {...props} >
        {children}
    </div>
  )
}

export default ImageWrapper
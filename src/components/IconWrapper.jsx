import React from 'react'

const IconWrapper = ({children, className="",...props}) => {
  return (
    <div className={`iconWrapper flex items-center justify-center ${className} `} {...props}>
        {children}
    </div>
  )
}

export default IconWrapper
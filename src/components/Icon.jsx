import React from 'react'

const Icon = ({children, className="",...props}) => {
  return (
    <div className={`icon flex items-center justify-center ${className} `} {...props}>
        {children}
    </div>
  )
}

export default Icon
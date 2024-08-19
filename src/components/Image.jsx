import React from 'react'

const Image = ({src, alt = "", className}) => {
  return (
    <div className={`image rounded-[inherit] ${className} `}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Image
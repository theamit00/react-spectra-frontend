import React from 'react'

const CustomHeading = ({Tag = "div", children, ...props}) => {
  return (
    <Tag {...props} >{children}</Tag>
  )
}

export default CustomHeading
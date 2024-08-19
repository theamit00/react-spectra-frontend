import React from 'react'
import Subtitle from './Subtitle'
import CustomHeading from './CustomHeading'
import Description from './Description'

const TitleSubtitleDescriptionComponent = ({className="", subtitle=null, heading=null, description = null, children, ...props}) => {
  return (
    <div className={`${className}`} {...props} >
        {subtitle && 
            <Subtitle className={`${subtitle.className? subtitle.className : ""}`} >
                {`${subtitle.text ? subtitle.text : "" }`} {subtitle.children ? subtitle.children : ""}
            </Subtitle>}
        {heading && 
            <CustomHeading Tag={heading.tag} className={`${heading.className? heading.className : ""}`}>
                {`${heading.text ? heading.text : "" }`} {heading.children ? heading.children : ""} 
            </CustomHeading>}
        {description && 
            <Description className={`${description.className ? description.className : ""}`} >
                {`${description.text ? description.text : "" }`} {description.children ? description.children : ""} 
            </Description>}
        {children}
    </div>
  )
}

export default TitleSubtitleDescriptionComponent
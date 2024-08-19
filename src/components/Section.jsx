import React from 'react'
import ImageComponent from './ImageComponent'

const Section = ({className, children, background = null}) => {
  return (
    <section className={`${className}`}>
      <div className="container">{children}</div>
      {background && (
        <ImageComponent
          src={background.src}
          className={` -z-30 ${background.className}`}
        />
      )}
    </section>
  );
}

export default Section
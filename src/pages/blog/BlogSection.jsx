import Section from '@/components/Section'
import React from 'react'
import Blogs from './Blogs'

const BlogSection = () => {
  return (
    <Section className={`p-[80px_24px] xl:p-[96px_24px]`} >
        <div className='max-w-[800px] w-full m-auto' >
            <Blogs/>
        </div>
    </Section>
  )
}

export default BlogSection
import React from 'react'
import Blog from './Blog';
import { RightIn } from '@/components/animations';

const blogDetails = [
  {
    title: "Learn from Other Designers Mistakes",
    descritpion:
      "Euismod aliquet odio cursus lacus, ut sit suspendisse ultrices. Etiam enim risus faucibus feugiat ut enim in sed tincidunt.",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  {
    title: "Learn from Other Designers Mistakes",
    descritpion:
      "Euismod aliquet odio cursus lacus, ut sit suspendisse ultrices. Etiam enim risus faucibus feugiat ut enim in sed tincidunt.",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  {
    title: "Learn from Other Designers Mistakes",
    descritpion:
      "Euismod aliquet odio cursus lacus, ut sit suspendisse ultrices. Etiam enim risus faucibus feugiat ut enim in sed tincidunt.",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  {
    title: "Learn from Other Designers Mistakes",
    descritpion:
      "Euismod aliquet odio cursus lacus, ut sit suspendisse ultrices. Etiam enim risus faucibus feugiat ut enim in sed tincidunt.",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
];

const Blogs = ({details = blogDetails}) => {
  return (
    <div className="blogsContainer">
      {details.map((detail) => (
        <RightIn delay={1} >
          <Blog detail={detail} />
        </RightIn>
      ))}
    </div>
  );
}

export default Blogs
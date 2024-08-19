import React from 'react'
import Icon from './Icon';
import { AiFillCheckCircle } from 'react-icons/ai';

const BulletPoints = ({children, ...props }) => {
  return (
    <div className="flex gap-[6px]" {...props} >
      <Icon>
        <AiFillCheckCircle className="w-6 h-6 text-orange-100" />
      </Icon>
      <p className="sm-p">{children}</p>
    </div>
  );
}

export default BulletPoints
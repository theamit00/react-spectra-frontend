import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import IconWrapper from './IconWrapper';
import Icon from './Icon';
import { FaArrowRight } from 'react-icons/fa';

const ButtonWithArrow = ({className, isOrange, text, path}) => {
  return (
    <Button className={className} isOrange={isOrange}>
      <Link to={`#`} className="flex items-center justify-center gap-1">
        <span>{text}</span>
        <IconWrapper className="w-6 h-6">
          <Icon>
            <FaArrowRight />
          </Icon>
        </IconWrapper>
      </Link>
    </Button>
  );
}

export default ButtonWithArrow
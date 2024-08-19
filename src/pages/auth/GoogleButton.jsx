import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Image from '@/components/Image';
import React from 'react'

const GoogleButton = () => {
  return (
    <Button className="bg-[#f7f7f7] flex gap-2 border-none shadow-none w-full hover:bg-lightGrey ">
      <Icon className="w-6 h-6">
        <Image
          src={`https://framerusercontent.com/images/SCqtZlpleVe6WLrHbG4W6wFIitc.svg`}
        />
      </Icon>

      <p className="sm-p text-black font-spaceGrotesk font-medium ">
        Continue with Google
      </p>
    </Button>
  );
}

export default GoogleButton
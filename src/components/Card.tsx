import React, { ComponentPropsWithRef } from 'react'
import grainImage from '@/assets/images/grain.jpg';
import { twMerge } from 'tailwind-merge';
import { PropsWithChildren } from 'react';

const Card = ({
  className,
  children,
  ...other
} : 
  ComponentPropsWithRef<"div">
) => {
  return (
    <div className={twMerge("bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10 relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20",className)}
    {...other}
    >
              <div className="-z-10 absolute inset-0 opacity-5" style={{
                backgroundImage : `url(${grainImage.src})`,
              }}>
      </div>
      {children}
    </div>
  )
}

export default Card
import React, { Fragment } from 'react'
import { twMerge } from 'tailwind-merge';

const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
  }:{
    items :{
      title:string;
      icon: React.JSX.Element;
    }[];
    className?: string;
    itemsWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className={twMerge("flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
        {[...new Array(2)].fill(0).map((_, index)=>(
          <Fragment key={index}>
            {items.map((item)=>(
          <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 mx-2 outline outline-2 outline-white/10 rounded-lg">
            <span className="text-4xl">
              {/* Cloning the icon to add gradient */}
              {React.cloneElement(item.icon, {
                style: {
                  fill: "url(#gradient)", // Reference the gradient
                  width: "1em",
                  height: "1em",
                },
              })}
              {/* Defining the gradient */}
              <svg width="0" height="0">
                <defs>
                <linearGradient id="gradient" >
                    <stop offset="0%" stopColor="#86ffe5" /> 
                    <stop offset="100%" stopColor="#75d6ff" /> 
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
          </Fragment>
        ))}
        
        </div>
      </div>
  )
}

export default ToolboxItems
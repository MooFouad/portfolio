import React from 'react'

const TechIcon = ({component}: {component : React.ElementType}) => {
  const Component = component;
  return (
    <Component className="size-10 bg-black" />
  )
}

export default TechIcon
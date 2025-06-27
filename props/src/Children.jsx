


import React from 'react'

// ✅ Fixed Children component
export const Children = ({ props = ["Rohit", "Mohan"] }) => {
  console.log(props[0], props[1])
  return (
    <div>Children Name: {props[0]} | Age: {props[1]}</div>
  )
}

// ✅ Fixed Children2 component (Correct spelling & usage of children prop)
export const Children2 = ({ children }) => {
  return (
    <div>Children JSX content: {children}</div>
  )
}

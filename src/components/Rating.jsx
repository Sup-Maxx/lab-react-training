import React, { useState } from 'react'

function Rating(props) {
  const {children} = props

  let rating = ""
  let numberFilledStar = Math.round(children)
  let numberEmptyStar = 5 - Math.round(children)

  for (let i = 0; i < numberFilledStar; i++) { 
    rating += "★" 
  };
  
  for (let i = 0; i < numberEmptyStar; i++) { 
    rating += "☆"
  }

  return (
    <div>
        <h1>your rating as a student</h1>
        <h2>{rating}</h2>
    </div>
  )
}

export default Rating
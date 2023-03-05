import React from 'react'

function DriverCard(props) {

    const {name, rating, img, car} = props

    let ratingStars = ""
  let numberFilledStar = Math.round(rating)
  let numberEmptyStar = 5 - Math.round(rating)

  for (let i = 0; i < numberFilledStar; i++) { 
    ratingStars += "★" 
  };
  
  for (let i = 0; i < numberEmptyStar; i++) { 
    ratingStars += "☆"
  }

  return (
    <div>
        <h4>{name}</h4>
        {ratingStars}
        <img src="img"/>
        <h6>{car.model} {car.licensePlate}</h6>
    </div>
  )
}

export default DriverCard
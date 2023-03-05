import React from 'react'

function Random(props) {

    const {minNumber, maxNumber} = props
    let randomNumber = Math.floor(Math.random()* (maxNumber - minNumber) + minNumber)
    
    return (
    <div>
        <h3>your random number is: {randomNumber}</h3>    
    </div>
  )
}

export default Random
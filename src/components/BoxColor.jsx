import React from 'react'

function BoxColor(props) {
  return (

    <div className='boxColor' style={{backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`}}>
        BoxColor
    </div>
  )
}

export default BoxColor
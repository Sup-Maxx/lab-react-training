import React from 'react'

function BoxColor(props) {

  return (

    <div className='boxColor' style={{backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`}}>
        <h5>rgb({props.red}, {props.green}, {props.blue})</h5>
        
    </div>
  )
}

export default BoxColor
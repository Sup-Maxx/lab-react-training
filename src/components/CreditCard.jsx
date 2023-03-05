import React from 'react'

function CreditCard(props) {

  let style = {
    background: props.bgColor,
    color: props.color,
  };


  return (
    <div className='creditCard' style={style}>

        <div className='top'>
            <h5>{props.type}</h5>
        </div>

        <div className='middle'>
            <h6>•••• •••• •••• {props.number.slice(-4)}</h6>
        </div>

        <div className='bottom'>
            <p>Expires at {props.month}/{props.year} {props.bank}</p>
            <p>{props.owner}</p>
        </div>

    </div>
  )
}

export default CreditCard
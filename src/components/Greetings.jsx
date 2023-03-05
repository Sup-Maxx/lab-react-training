import React from 'react'

function Greetings(props) {


  return (
    <div>
        {props.lang === "en" && <h3>Hello, {props.children}</h3>}
        {props.lang === "de" && <h3>Hallo, {props.children}</h3>}
        {props.lang === "fr" && <h3>Bonjour, {props.children}</h3>}
        {props.lang === "es" && <h3>Hola, {props.children}</h3>}
        {props.lang === "pt" && <h3>Olá, {props.children}</h3>}
        {props.lang === "it" && <h3>Ciao, {props.children}</h3>}
        {props.lang === "il" && <h3>Shalom, {props.children}</h3>}
    </div>
  )
}

export default Greetings
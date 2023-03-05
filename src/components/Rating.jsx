import React, { useState } from 'react'

function Rating(props) {

    /* const [stars, setStars] = useState("☆☆☆☆☆") */
    let stars = "☆☆☆☆☆"
    let roundedNumber = Math.round(props.children)

    
        
    


  return (
    <div>
        <h1>your rating as a student</h1>

        {/* switch(roundedNumber) {
            case "1" : <h1>"★☆☆☆☆"</h1>; break
            case "2" : <h1>"★★☆☆☆"</h1>; break
            case "3" : <h1>"★★★☆☆"</h1>; break
            case "4" : <h1>"★★★★☆"</h1>; break
            case "5" : <h1>"★★★★★"</h1>; break
            default : <h1>"☆☆☆☆☆"</h1>
        }  */}

      {roundedNumber == 1 &&  "★☆☆☆☆"}
      {roundedNumber == 2 &&  "★★☆☆☆"}
      {roundedNumber == 3 &&  "★★★☆☆"}
      {roundedNumber == 4 &&  "★★★★☆"}
      {roundedNumber == 5 &&  "★★★★★"}
    </div>
  )
}

export default Rating
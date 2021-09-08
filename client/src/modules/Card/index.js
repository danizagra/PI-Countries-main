import React from 'react'

function Card({name, image, continent}) {
      return (
            <div>
                  <h3>{name}</h3>
                  <h5>{continent}</h5>
                  <img src={image} alt="Countries papaaaaa" width='200px' height='100px'/>
            </div>
      )
}

export default Card


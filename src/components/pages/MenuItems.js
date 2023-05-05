import React from 'react'
import "../styling/MenuItems.css"

function MenuItems({image, title, description, price}) {
  return (
    <div className='MenuItem'>

        <div className='pic'>
            <img src={image} alt=""/>
        </div>
        <div className='title-desc'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className="price">
            <h2>${price}</h2>
        </div>
        
    </div>
  )
}

export default MenuItems
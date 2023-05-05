import React from 'react'
import "../styling/Menu.css"
import data from "../files/menuitems.json"
import MenuItem from "./MenuItems"

function Menu() {

const {appetizers, maincourses, desserts, drinks} = data;

  return ( 
    <div className='menu-page'>
      <h1>Appetizers</h1>
      <div classname="appetizers d-flex">

          {appetizers.map ((item) => (
            <MenuItem
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}/>
          ))}

      </div>

      <h1>maincourses</h1>
      <div classname="maincourses d-flex">

          {maincourses.map ((item) => (
            <MenuItem
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}/>
          ))}
          
      </div>

      
      <h1>desserts</h1>
      <div classname="desserts d-flex">

          {desserts.map ((item) => (
            <MenuItem
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}/>
          ))}
       </div>
      
      <h1>Drinks</h1>
      <div classname="drinks d-flex">

          {drinks.map ((item) => (
            <MenuItem
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}/>
          ))}
       
        </div>


    </div>
  )
}

export default Menu
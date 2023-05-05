import React from 'react'

function hours(props) {
  return (
    <div classname="hours">
        <div classname="days">
        <h2>{props.da}</h2>       
        </div>
        <div classname="opening">
        <h2>{props.open}</h2>
        <div classname="dash">
        <h1>-</h1>    
        </div>
        <div classname="closing">
        <h2>{props.close}</h2>
        </div>
    </div>
        </div>
  )
}

export default hours
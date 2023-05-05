import React from "react";
import "../styling/Home.css";
import data from "../files/hours.json"
import Hours from "./hours"


const Home = () => {

function storeHours () {
  return data.map((day) =>

<Hours day = {day.day}
open = {day.openingHour}
close = {day.closingHour}
/>

)
  }

  return (
    <div className="home">
      <h1>Welcome to Our Restaurant</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        lacus sit amet nisi rhoncus bibendum.
      </p>
        {storeHours()}
    </div>
  );
};

export default Home;




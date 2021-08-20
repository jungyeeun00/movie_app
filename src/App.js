import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name:"kimbap",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dgBdvLWjQph6xLPpF6_u3AHaE8%26pid%3DApi&f=1",
    rating: 4.3
  },
  {
    id:2,
    name:"kimchi",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Iy6uvQLmhDuJnGSUmXDT8AHaEK%26pid%3DApi&f=1",
    rating: 5.0
  },
  {
    id:3,
    name:"mango",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.h9wHdTpLCRRiyHIzvMNaFAHaFZ%26pid%3DApi&f=1",
    rating: 2.5
  }
]

function Food({name, picture, rating}){
  return(
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture}/>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
        {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;

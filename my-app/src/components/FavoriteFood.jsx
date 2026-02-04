import React from 'react'
import {useState} from 'react';

function FavoriteFood() {
  
    // will two properties - 
    
    const [food, setFood] = useState('Friedrice'); // arrary destructuring

    // let food = 'maggie';

  return (
    <>
    <h1>My Favorite food is {food}</h1>
    <button onClick={()=>{setFood('maggie')}} >Change Food</button>
    </>
  )
}

export default FavoriteFood

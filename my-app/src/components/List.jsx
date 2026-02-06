import React, { useState } from "react";

function List() {

      const [list, setList] = useState([]);

      const [count, setCount] = useState(1)

function addProduct() {
    const productName = "product " + count;
    setList((previousState)=> {return [...previousState, productName]})
    setCount((previousState)=>{return previousState + 1})
}

console.log("current state", list);
console.log("current state", count);

  return (
    <>
      <h1>List</h1>
      <button onClick={addProduct} >add product</button>
      <ul> {
            list.map((el,index) => <li key={index}>{el}</li>)
        }
        
      </ul>
    </>
  );
}

export default List;

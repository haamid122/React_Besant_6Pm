import React, { useState } from 'react'

function MyForm() {

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");

const [inputs, setInputs] = useState({});

//   console.log("current state: ", name);

  function handleSubmit(e) {
    e.preventDefault(); 
    console.log('Form submitted');
     console.log("current state: ", inputs);
  }
   
  return (
    <>
      {/* <form action=""  onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your Name: <input type="text" onChange={(e)=>{setName(e.target.value)}}  /></label>
           <input type="submit" value="submit form"/>
      </form> */}
        <form action=""  onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your Name: <input type="text" onChange={(e)=>{setInputs((pre)=> {return {...pre, name: e.target.value}})}}  /></label> <br /><br />
        <label htmlFor="">Enter Your Age: <input type="text" onChange={(e)=>{setInputs((pre)=> {return {...pre, age: e.target.value}})}}  /></label> <br /><br />
        <label htmlFor="">Enter Your Email: <input type="text" onChange={(e)=>{setInputs((pre) => {return {...pre, email: e.target.value}})}}  /></label> <br /><br />
           <input type="submit" value="submit form"/>
      </form>
    </>
  )
}



export default MyForm
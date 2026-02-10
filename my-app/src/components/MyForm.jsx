import React, { useState } from 'react'

function MyForm() {

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");

const [inputs, setInputs] = useState({email: "@gmail.com", phone: "+91"});

//   console.log("current state: ", name);

  function handleSubmit(e) {
    e.preventDefault(); 
    console.log('Form submitted');
     console.log("current state: ", inputs);
  }

  function handleChange(e) {
    //  (e)=>{setInputs((pre)=> {return {...pre, name: e.target.value}})}
    //  (e)=>{setInputs((pre)=> {return {...pre, age: e.target.value}})}
    //  (e)=>{setInputs((pre) => {return {...pre, email: e.target.value}})}
 
     const name = e.target.name;
     const value = e.target.value; 

    //     
    setInputs((preState) => { return {...preState,  [name]: value } })

  }  
   
  return (
    <>
      {/* <form action=""  onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your Name: <input type="text" onChange={(e)=>{setName(e.target.value)}}  /></label>
           <input type="submit" value="submit form"/>
      </form> */}
        <form action=""  onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your Name: <input type="text" name='name' onChange={handleChange}  /></label> <br /><br />
        <label htmlFor="">Enter Your Age: <input type="text" name='age' onChange={handleChange}  /></label> <br /><br />
        <label htmlFor="">Enter Your Email: <input type="text"  value={inputs.email} name='email' onChange={handleChange}  /></label> <br /><br />
          <label htmlFor="">Select the country: <select name="country" id=""  onChange={handleChange}  >  
               <option value="India">India</option>
               <option value="USA">USA</option>
               <option value="China">China</option>
             </select></label> <br /><br />

    
      
           <input type="submit" value="submit form"/>
      </form>
    </>
  )
}



export default MyForm
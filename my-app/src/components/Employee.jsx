import React from "react";

function Employee(props) {

     // Destructuring - object destructuring

  const { empName, age } = props;
  const text = `Hai i am ${empName} working as React dev, my age is ${age}`;

  return (
    <>
      <h2>Hai Welcome to React</h2>
      <h2>{text}</h2>
    </>
  );
}

export default Employee;

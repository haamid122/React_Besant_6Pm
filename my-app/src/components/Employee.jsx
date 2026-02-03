import React from "react";

function Employee(props) {

     // Destructuring - object destructuring
  const {empDetails} = props;
  const { empName, age, city, empCode } = empDetails;

  const text = `Hai i am ${empName} working as React dev, my age is ${age} and my city is ${city}, my emp code is ${empCode}`;

  return (
    <>
      <h2>Hai Welcome to React</h2>
      <h2>{text}</h2>
    </>
  );
}

export default Employee;

import React from "react";
import Employee from "./Employee.jsx";

function Office() {
  // const empName = "Ganesh";
  // const age = "21";

  const empDetails = {
    empName: "Mani",
    age: "20",
    city: "chennai",
    empCode: "VENYAX021",
  };

  const isEmployeeCameToOffice = false;

  const empList = [
    {
      empName: "Mani",
      age: "20",
      city: "chennai",
      empCode: "VENYAX021",
    },
    {
      empName: "Ganesh",
      age: "22",
      city: "thirchy",
      empCode: "VENYAX022",
    },
    {
      empName: "Aslam",
      age: "25",
      city: "salem",
      empCode: "VENYAX023",
    },  {
      empName: "john",
      age: "23",
      city: "coimbatore",
      empCode: "VENYAX024",
    }
  ];
  const numberList = [1, 2, 3 , 4, 4, 5];

  return (
    <>
      <h2>Who work in my office</h2>
      {/* <Employee empName={empName} age='29' city='chennai'/> */}

      {/* {empDetails.empName !== undefined &&
      empDetails.age !== undefined &&
      empDetails.city !== undefined &&
      empDetails.empCode !== undefined ? (
        <Employee empDetails={empDetails} />
      ) : null} */}

      {/* {empDetails.empName !== undefined &&
      empDetails.age !== undefined &&
      empDetails.city !== undefined &&
      empDetails.empCode !== undefined && (
        <Employee empDetails={empDetails} />
      )} */}

      {/* {isEmployeeCameToOffice ? (
        <h2>Employee came to office</h2>
      ) : (
        <h2>Employee didn't came to office</h2>
      )} */}

     <ul>
        { empList.map((empDetails, index) =>  <li key={index} ><Employee empDetails = {empDetails}/> </li>)} 
     </ul>

     <ul>
      {
        numberList.map((e, index) => <p key={index} >{e}</p>)
      }
     </ul>

    </>
  );
}

export default Office;

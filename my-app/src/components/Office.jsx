import React from 'react'
import Employee from './Employee.jsx'

function Office() {
    const empName = "Ganesh";
    // const age = "21";
  return (
    <>
    <h2>Who work in my office</h2>
    <Employee empName={empName} age='23'/>
    </>
   
  )
}

export default Office


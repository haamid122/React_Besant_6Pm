import React from 'react'
import { useParams } from 'react-router-dom'

function MetroWorkers() {
    const {id} = useParams();
  return (
    <>
      <h1>Metro Workers Details Page</h1>
      <h2>We are metro layman workers</h2>
      <p>Worker ID is <b>{id}</b></p>
    </>
  )
}

export default MetroWorkers
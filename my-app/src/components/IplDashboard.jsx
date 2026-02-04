import React from "react";
import { useState } from "react";

function IplDashboard() {
  //    const [team, setTeam] = useState("CSK");
  //    const [captain, setCaptain] = useState("Dhoni");
  //    const [sponser, setSponser] = useState("Asianpaints");
  //    const [owner, setOwner] = useState("adani");

  const [iplTeam, setIplTeam] = useState({
    team: "CSK",
    captain: "dhoni",
    sponser: "Asian Paints",
    owner: "adani",
  });

  // function updateTeam() {
  //   setIplTeam({ team: "rcb" });
  // }
  function updateTeam() {
    setIplTeam((previousState)=> {
         return {...previousState, team: "rcb"}
    });
  }

  console.log("current state: ", iplTeam);
  

  return (
    <>
      <h1>My Ipl Dashboard</h1>
      <p>Team: {iplTeam.team}</p>
      <p>Captain: {iplTeam.captain}</p>
      <p>Sponser: {iplTeam.sponser}</p>
      <p>Owner: {iplTeam.owner}</p>

      <button onClick={updateTeam}>Change Team</button>
    </>
  );
}

export default IplDashboard;

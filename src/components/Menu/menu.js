import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
// import { IconContext } from 'react-icons';

function Menu() {
  const [teamDiv, setTeamDiv] = useState();
  useEffect(()=>{
    setTeamDiv(document.getElementById("teams-links"))
    
  }, [])
  
  function showTeams(){
    teamDiv.style.display="flex";
  }
  function hideTeams(){
    teamDiv.style.display="none";
  }

  const firstPlace = 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/MAXVER01.png.transform/4col/image.png'
  return (
    <div className="menu-holder">
      <div className="header">
        <img src="/f1_logo.png" className="f1Logo" />
        <div className="links-box">
          <Link className="link" to="/">
              Home
          </Link>
          <Link className="link" to="/driver-standings">
              Driver standings
          </Link>
          <Link className="link" to="/constructor-standings">
              Team standings
          </Link>
          <button id="a" className="teams-button" onMouseOver={showTeams}>
            Teams
          </button>
        </div>
      </div>
        
      <div id="teams-links" className="teams-div" onMouseLeave={hideTeams}>
        <Link className="teams-link" to='/teams/Alfa-Romeo-Racing'>
          Alfa Romeo
        </Link>
        <Link className="teams-link" to='/teams/AlphaTauri'>
          AlphaTauri
        </Link>
        <Link className="teams-link" to='/teams/Alpine'>
          Alpine
        </Link>
        <Link className="teams-link" to='/teams/Aston-Martin'>
          Aston Martin
        </Link>
        <Link className="teams-link" to='/teams/Ferrari'>
          Ferrari
        </Link>
        <Link className="teams-link" to='/teams/Haas'>
          Haas
        </Link>
        <Link className="teams-link" to='/teams/McLaren'>
          McLaren
        </Link>
        <Link className="teams-link" to='/teams/Mercedes'>
          Mercedes
        </Link>
        <Link className="teams-link" to='/teams/Red-Bull-Racing'>
          Red Bull
        </Link>
        <Link className="teams-link" to='/teams/Williams'>
          Williams
        </Link>
      </div>
    </div>
  );
}

export default Menu;
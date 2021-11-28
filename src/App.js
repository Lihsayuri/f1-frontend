import logo from './logo.svg';
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import axios from "axios";
import PlaySound from './components/PlaySound/playsound';
import Home from './components/Home/home';
import Menu from './components/Menu/menu';
import DriverStandings from './components/DriverStandings/driverStandings';
import ConstructorStandings from './components/ConstructorStandings/constructorStandings';
import TeamPage from './components/TeamPage/teamPage';
import './App.css';

// const [lastRace, setLastRaceResult] = useState(""); // Remova o array de notes que existia na versão anterior

function App() {

  return (
    <Router>
      <main>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 
        <Menu />
        <Routes>
          <Route path='/' exact element={<Home />} />                
          <Route path='/driver-standings' element={<DriverStandings/>} />
          <Route path='/constructor-standings' element={<ConstructorStandings/>} />
          <Route path="/teams/:teamId" element={<TeamPage/>}/>
        </Routes>
        <PlaySound />
      </main>
    </Router>
  );
}

export default App;

import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import './driverStandings.css' 



function DriverStandings() {
  // const { JSDOM } = require("jsdom")
  const [positions, setPositions] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [car, setCar] = useState([]);
  const [points, setPoints] = useState([]);
  const [firstPlaceSrc, setFirstPlaceSrc] = useState("")
  const [secondPlaceSrc, setSecondPlaceSrc] = useState("")
  const [thirdPlaceSrc, setThirdPlaceSrc] = useState("")

  const loadData = () => {
    axios
    .get("http://ergast.com/api/f1/current/driverStandings.json")
    .then((res) => {
      let posicoes = [];
      let pilotos = [];
      let nacionalidades = [];
      let carros = [];
      let pontos = [];
        for (let i = 0; i < res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.length ; i++ ){
          posicoes.push(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position);
          pilotos.push(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName + " "+res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName);
          nacionalidades.push(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality);
          carros.push(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name);
          pontos.push(res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points)
        }

        setPositions(posicoes);
        setDrivers(pilotos);
        setNationalities(nacionalidades);
        setCar(carros);
        setPoints(pontos)

      console.log("ESSE É O RES.DATA: ", res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]);
      console.log(posicoes);
      console.log(pilotos);
      console.log(nacionalidades);
      console.log(carros);
      console.log(pontos);

    });
  }

  const f1Images = () => {
    axios
    .get("https://mysterious-refuge-74126.herokuapp.com/driver-standings")
    .then((response) =>{
      setFirstPlaceSrc(response.data['First'])
      setSecondPlaceSrc(response.data['Second'])
      setThirdPlaceSrc(response.data['Third'])
    });
  }

  
  useEffect(() => {
      loadData();
      f1Images();
  }, []);

  return (
    <>
      <div className="rowImgDrivers greyBox">
        <div className="columnsImgDrivers">
          <img src={secondPlaceSrc}></img>
          <p className="colocacoes">2º</p>
        </div>
        <div className="columnsImgDrivers">
          <img src={firstPlaceSrc}></img>
          <p className="colocacoes">1º</p>
        </div>
        <div className="columnsImgDrivers">
          <img src={thirdPlaceSrc}></img>
          <p className="colocacoes">3º</p>
        </div>
      </div>      
      <div className="tableDriverStandings">
        <div className="row">
          <div className="columnsDriverStandings">
            {positions.map((position) => (
              <p className="fonte">{position}</p>
                ))}
          </div>
          <div className="columnsDriverStandings">
            {drivers.map((driver) => (
              <p className="fonte">{driver}</p>
                ))}
          </div> 
          <div className="columnsDriverStandings">
            {nationalities.map((nationality) => (
              <p className="fonte">{nationality}</p>
                ))}
          </div>
          <div className="columnsDriverStandings">
            {car.map((car) => (
              <p className="fonte">{car}</p>
                ))} 
          </div>
          <div className="columnsDriverStandings">
            {points.map((point) => (
              <p className="fonte">{point}</p>
                ))}
          </div>
        </div>
    </div>
  </>
  );
}

export default DriverStandings;

import { useEffect, useState } from "react";
import axios from "axios";
import './home.css';


function Home() {
  const [isLoading, setLoading] = useState(true);

  const [standings, setStandings] = useState("");
  const [points, setPoints] = useState("");

  const [season, setSeason] = useState("");
  const [place, setPlace] = useState("");
  const [city, setCity] = useState("");

  const loadData = () => {
    axios
    .get("https://ergast.com/api/f1/current/last/results.json")
    .then((res) => {
        // setLastRaceResult(res.data);
        let colocacoes = []
        let pontos = []
        setSeason(res.data.MRData.RaceTable.season);
        setPlace(res.data.MRData.RaceTable.Races[0].Circuit.Location.country+", "+ res.data.MRData.RaceTable.Races[0].Circuit.circuitName);
        setCity(res.data.MRData.RaceTable.Races[0].raceName)
        for (let i = 0; i < res.data.MRData.RaceTable.Races[0].Results.length ; i++ ){
          let piloto = res.data.MRData.RaceTable.Races[0].Results[i].position+ ". "+" "+ res.data.MRData.RaceTable.Races[0].Results[i].Driver.givenName+" "+res.data.MRData.RaceTable.Races[0].Results[i].Driver.familyName;
          let ponto = res.data.MRData.RaceTable.Races[0].Results[i].points;
          colocacoes.push(piloto);
          pontos.push(ponto);
        }

        setStandings(colocacoes);
        setPoints(pontos);
        setLoading(false);
        // console.log("ESSE É O RES.DATA: ", res.data.MRData.RaceTable.Races[0]);
        // console.log("OLHA AI: ", colocacoes)
    });
  }


  useEffect(() => {
      loadData();
  }, []);

  // console.log("PRINTANDO AQUI: ",standings)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="greyBox">
        <h3 className="lastRace"> {place}</h3>
        <h4 className="year"> {season} </h4>
        <h5 className="city"> {city} </h5>  
      </div>

      <div className="table">
        <div className="rowHome">
          <ul>
              {standings.map((position) => (
                <p className="fonte">{position}</p>
                  ))}
          </ul>

          <ul>
              {points.map((points) => (
                <p className="fonte">{points}</p>
                  ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

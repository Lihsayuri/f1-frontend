import { useEffect, useState } from "react";
import axios from "axios";
import './constructorStandings.css'

function ConstructorStandings() {

    const [positions, setPositions] = useState([]);
    const [construtors, setconstrutors] = useState([]);
    const [points, setPoints] = useState([]);
    const [wins, setWins] = useState([]);
    const [nationalities, setNationalities] = useState([]);
    const [firstPlaceSrc, setFirstPlaceSrc] = useState([])
    const [secondPlaceSrc, setSecondPlaceSrc] = useState([])
    const [thirdPlaceSrc, setThirdPlaceSrc] = useState([])
  
    const loadData = () => {
      axios
      .get("http://ergast.com/api/f1/current/constructorStandings.json")
      .then((res) => {
        let vitorias = []
        let posicoes = [];
        let construtores = [];
        let pontos = [];
        let nacionalidades = [];
          for (let i = 0; i < res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length ; i++){
            posicoes.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].position);
            construtores.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].Constructor.name);
            pontos.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].points)
            vitorias.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].wins)
            nacionalidades.push(res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].Constructor.nationality)
          }
  
          setPositions(posicoes);
          setconstrutors(construtores);
          setWins(vitorias);
          setPoints(pontos);
          setNationalities(nacionalidades);
  
        console.log("ESSE É O RES.DATA: ", res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0]);
        console.log(posicoes);
        console.log(construtores);
        console.log(pontos);
      });
    }

    const f1Images = () => {
      axios
      .get("http://127.0.0.1:8000/constructor-standings")
      .then((response) =>{
        setFirstPlaceSrc(response.data['First'])
        setSecondPlaceSrc(response.data['Second'])
        setThirdPlaceSrc(response.data['Third'])
        // console.log("ESSE É O FIRSt:", response.data['First'])
      });
    }
  
  
    useEffect(() => {
        loadData();
        f1Images();
    }, []);
  
    return (
      <>
        <div className="rowImg greyBox"> 
          <div className="columnsImg">
            {secondPlaceSrc.map((second) => (
                  <img src={second}></img>
                    ))}
          </div>
          <div className="columnsImg">
            {firstPlaceSrc.map((first) => (
                  <img src={first}></img>
                    ))}
          </div>
          <div className="columnsImg">
            {thirdPlaceSrc.map((third) => (
                  <img src={third}></img>
                    ))}
          </div>
        </div>
        <div className="tableConstrucStandings">
          <div className="row">
            <div className="columnsConstructor">
              {positions.map((position) => (
                <p className="fonte">{position}</p>
                  ))}
            </div>
            <div className="columnsConstructor">
              {construtors.map((construtor) => (
                <p className="fonte">{construtor}</p>
                  ))}
            </div> 
            <div className="columnsConstructor">
              {nationalities.map((nationality) => (
                <p className="fonte">{nationality}</p>
                  ))}
            </div> 
            <div className="columnsConstructor">
              {wins.map((win) => (
                <p className="fonte" >{win}</p>
                  ))}
            </div> 

            <div className="columnsConstructor">
              {points.map((point) => (
                <p className="fonte" >{point}</p>
                  ))}
            </div>
          </div>
      </div>
    </>
    );
  }
  
  export default ConstructorStandings;
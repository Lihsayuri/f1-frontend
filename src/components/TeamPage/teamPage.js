import { useEffect, useState } from "react";
import axios from "axios";
import './teamPage.css'
import { useParams } from 'react-router-dom';

function TeamPage(){
    //window.location.reload();
    const { teamId } = useParams();
    const [isLoading, setLoading] = useState(true);

    const [driver1, setDriver1] = useState();
    const [driver2, setDriver2] = useState();

    const [teamStatsKeys, setTeamStatsKeys] = useState();
    const [teamStatsValues, setTeamStatsValues] = useState();

    const [teamLogo, setTeamLogo] = useState();

    const loadData = () => {
        axios
        .get(`https://mysterious-refuge-74126.herokuapp.com/teams/${teamId}`)
        .then((response) => {
            setDriver1(response.data.drivers.driver0)
            setDriver2(response.data.drivers.driver1)
            setTeamLogo(response.data.teamLogo)
            setTeamStatsKeys(Object.keys(response.data.stats))
            setTeamStatsValues(Object.values(response.data.stats))
            setLoading(false);
        });
      }

    useEffect(() => {
        setLoading(true)
        loadData();
    }, [teamId]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
    console.log(teamStatsValues)
    return (
        <div className="team-page">
            <img className="team-logo" src={teamLogo}></img>
            <div className="team-info">
                <div className="stats">
                    <div className="stats-keys">
                        {teamStatsKeys.map((key) => (
                        <p className="fonte">{key}</p>
                            ))}
                    </div>
                    <div className="stats-values">
                        {teamStatsValues.map((value) => (
                        <p className="fonte">{value}</p>
                            ))}
                    </div>
                </div>
                <div className="drivers-holder">
                    <h1 className="fonte-titulo">Drivers:</h1>
                    <div className="drivers">
                        <div className="driver-info">
                            <img src={driver1.imageURL}></img>
                            <h2 className="fonte-subtitulo">{driver1.name}</h2>
                            <p className="fonte">{driver1.number}</p>
                        </div>
                        <div className="driver-info">
                            <img src={driver2.imageURL}></img>
                            <h2 className="fonte-subtitulo">{driver2.name}</h2>
                            <p className="fonte">{driver2.number}</p>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default TeamPage;



import { useState, useEffect } from "react";
import "./Leagues.css";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Leagues = ({leagueId, selectedDate}) => {
  const [fixtures, setFixtures] = useState([])
  const [teams, setTeams] = useState([])
  
useEffect(() => {
  const fetchFixtures = async () => {
    const formattedDate = selectedDate.toISOString().split("T")[0]
    const url = `https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=${formattedDate}&l=${leagueId}`

    try {
      const response = await fetch(url)
      const data = await response.json()
      setFixtures(data.events || [])
    } catch (error) {
      console.error("Error fetching fixtures")
    }
  }
  // fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League")
  //   .then((response) => response.json())
  //   .then((data) => setTeams(data.teams))
  //   .catch((error) => console.error("Error fetching data:", error));
  fetchFixtures()
}, [leagueId, selectedDate]);


  return (
      <div className="league">
      <h3>Fixtures for League {leagueId}</h3>
      {fixtures.length === 0 ? (
        <p>No matches on this date.</p>
      ) : (
        fixtures.map((match) => (
          <div key={match.idEvent} className="fixture">
            <span>{match.strEvent}</span>
            <span>{match.strTime}</span>
          </div>
        ))
      )}
    </div>
      // {/* <div>
      //   <a href="" className="league-name-box">
      //       <h4 className="league-name">League name</h4>
      //       <ArrowRightIcon></ArrowRightIcon>
      //   </a>
      // </div>
      // <div className="fixture-list">
      //   <a href="" className="fixture">
      //     <div className="game-time">20:00</div>
      //     <div className="score">
      //       <div className="home-score">1</div>
      //       <div className="away-score">2</div>
      //     </div>
      //     <div className="teams">
      //       <div className="home-team">Home</div>
      //       <div className="away-team">Away</div>
      //     </div>
      //   </a>
      // </div> */}
  );
};

export default Leagues;

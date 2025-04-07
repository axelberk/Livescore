import { useState, useEffect } from "react";
import "./Leagues.css";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Leagues = ({leagueId, selectedDate}) => {
  const [fixtures, setFixtures] = useState([])
  const [leagueName, setLeagueName] = useState("Loading...")

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  
  useEffect(() => {
    const fetchLeagueName = async () => {
      try {
        const response = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
        );
        const data = await response.json();

        console.log("All Leagues Data:", data); 

        if (data.leagues) {
          const foundLeague = data.leagues.find(
            (league) => league.idLeague === leagueId
          );

          setLeagueName(foundLeague ? foundLeague.strLeague : "Unknown League");
        }
      } catch (error) {
        console.error("Error fetching league name:", error);
        setLeagueName("Error Loading");
      }
    };

    fetchLeagueName();
  }, [leagueId]);

  useEffect(() => {
    const fetchFixtures = async () => {
      if (!leagueName || leagueName === "Loading...") return

      const dateStr = formatDate(selectedDate)
      const encodedLeagueName = encodeURIComponent(leagueName)

      try {
        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=${dateStr}&l=${encodedLeagueName}`
        )
        const data = await response.json()

        setFixtures(data.events || [])
      } catch (error) {
        console.error("Error fetching fixtures", error);
      }
    }
    fetchFixtures()
  }, [leagueName, selectedDate])

  return (
      <div className="league">
      <h3>{leagueName}</h3>
      {fixtures.length === 0 ? (
        <p>No fixtures found.</p>
      ) : (
        fixtures.map((match) => (
          <div key={match.idEvent} className="fixture">
            <span>{match.strHomeTeam} vs {match.strAwayTeam}</span>
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

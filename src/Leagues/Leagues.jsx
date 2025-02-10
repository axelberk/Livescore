import "./Leagues.css";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function fetchJSONData() {
    fetch("https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Arsenal")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
              console.log(data))
        .catch((error) => 
               console.error("Unable to fetch data:", error));
}
fetchJSONData();

const Leagues = () => {
  return (
    <div className="league">
      <div>
        <a href="" className="league-name-box">
            <h4 className="league-name">League name</h4>
            <ArrowRightIcon></ArrowRightIcon>
        </a>
      </div>
      <div className="fixture-list">
        <a href="" className="fixture">
          <div className="game-time">20:00</div>
          <div className="score">
            <div className="home-score">1</div>
            <div className="away-score">2</div>
          </div>
          <div className="teams">
            <div className="home-team">Home</div>
            <div className="away-team">Away</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Leagues;

import "./Leagues.css"

const Leagues = () => {
    return (
        <div className="league">
            <div className="league-name-box">
            <h4 className="league-name">League name</h4>
            <button className="league-redirect">League</button>
            </div>
            <div className="fixture-list">
                <a href="" className="fixture"><div><div className="game-time">20:00</div>Team A vs Team B</div></a>
                
            </div>
        </div>
    )
}

export default Leagues
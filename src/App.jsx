  import { useState } from "react";
  import "./App.css";
  import Leagues from "./Leagues/Leagues";
  import Calendar from "./Calendar/Calendar";
  import Match from "./Match/Match";

  function App() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
      <div className="App">
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <div className="content-container">
          <div className="league-container">
            <Leagues leagueId="4328" selectedDate={selectedDate}/>
            <Leagues leagueId="4347" selectedDate={selectedDate}/>
            <Leagues leagueId="4335" selectedDate={selectedDate}/>
            <Leagues leagueId="4332" selectedDate={selectedDate}/>
            <Leagues leagueId="4334" selectedDate={selectedDate}/>
            <Leagues leagueId="4331" selectedDate={selectedDate}/>
            <Leagues leagueId="4337" selectedDate={selectedDate}/>
            <Leagues leagueId="4344" selectedDate={selectedDate}/>
          </div>
          <Match />
        </div>
      </div>
    );
  }

  export default App;

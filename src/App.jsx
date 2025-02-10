  import { useState } from "react";
  import "./App.css";
  import Leagues from "./Leagues/Leagues";
  import Calendar from "./Calendar/Calendar";
  import Match from "./Match/Match";

  function App() {
    return (
      <div className="App">
        <Calendar />
        <div className="content-container"> {/* Apply the class here */}
          <div className="league-container">
            <Leagues />
            <Leagues />
            <Leagues />
            <Leagues />
            <Leagues />
          </div>
          <Match />
        </div>
      </div>
    );
  }

  export default App;

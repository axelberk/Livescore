import { useState } from 'react'
import './App.css'
import Leagues from './Leagues/Leagues'
import Calendar from './Calendar/Calendar'

function App() {
  return (
    <div className='App'>
      <Calendar></Calendar>
      <Leagues></Leagues>
      <Leagues></Leagues>
      <Leagues></Leagues>
      <Leagues></Leagues>
      <Leagues></Leagues>
    </div>
  )
}

export default App

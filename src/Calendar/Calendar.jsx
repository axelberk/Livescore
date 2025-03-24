import "./Calendar.css";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())

  const toggleModal = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  const formatDate = (date) => {
    return date.toISOString().split("T")[0]
  }

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value))
    setIsOpen(false)
  }

  const previousDay = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setDate(newDate.getDate() - 1)
      return newDate
    })
  }

  const nextDay = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate)
      newDate.setDate(newDate.getDate() + 1)
      return newDate
    })
  }

  return (
    <div className="Calendar">
      <a href="" className="calendar-arrow" onClick={previousDay}>
        <ArrowLeftIcon></ArrowLeftIcon>
      </a>
      <a href="" className="calendar-arrow" onClick={nextDay}>
        <ArrowRightIcon></ArrowRightIcon>
      </a>
      <a href="" className="clickable-calendar" onClick={toggleModal}>
      <CalendarMonthIcon></CalendarMonthIcon>
      <span>{formatDate(selectedDate)}</span>
      </a>

      {isOpen && (
        <div className="calendar-modal" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Select a date</h3>
            <input type="date" onChange={handleDateChange}/>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

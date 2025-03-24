import "./Calendar.css";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className="Calendar">
      <a href="" className="calendar-arrow">
        <ArrowLeftIcon></ArrowLeftIcon>
      </a>
      <a href="" className="calendar-arrow">
        <ArrowRightIcon></ArrowRightIcon>
      </a>
      <a href="" className="clickable-calendar" onClick={toggleModal}>
      <CalendarMonthIcon></CalendarMonthIcon>
      <span>Today</span>
      </a>

      {isOpen && (
        <div className="calendar-modal">
          <div className="modal-content">
            <h3>Select a date</h3>
            <input type="date" />
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

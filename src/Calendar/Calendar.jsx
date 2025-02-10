import "./Calendar.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Calendar = () => {
  return (
    <div className="Calendar">
      <a href="" className="calendar-arrow">
        <ArrowLeftIcon></ArrowLeftIcon>
      </a>
      <a href="" className="calendar-arrow">
        <ArrowRightIcon></ArrowRightIcon>
      </a>
      <a href="" className="clickable-calendar">
      <CalendarMonthIcon></CalendarMonthIcon>
      <span>Today</span>
      </a>
    </div>
  );
};

export default Calendar;

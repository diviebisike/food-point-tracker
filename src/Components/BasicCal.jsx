import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useNavigate} from 'react-router-dom';

const SimpleCalendar = () => {
    const navigate = useNavigate();
  
    // handle click anywhere on calendar
    const handleClick = () => {
      navigate('/CalendarPage');
    };
  
    return (
      <div onClick={handleClick}>
        <Calendar
          value={new Date()}
          view="month"
          showNeighboringMonth={false}
          onClickDay={handleClick}
        />
      </div>
    );
}

export default SimpleCalendar
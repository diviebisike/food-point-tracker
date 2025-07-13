import ReactCalendar from '../Components/Calendar';

export function CalendarPage(){
    return(
    <>
    <h1 className = "top-banner">Calendar</h1>
    <p className = "top-banner">Choose the dates you will not be at Duke:</p>
      <div>
        <ReactCalendar/>
      </div>

    </>
      )
}

import ReactCalendar from '../Components/Calendar';

export function CalendarPage(){
    return(
    <>
    <div >
    <h1 className = "top-banner">Calendar</h1>
    <p >Choose the dates you will not be at Duke:</p>
      <div>
        <ReactCalendar/>
      </div>
      </div>
    </>
      )
}

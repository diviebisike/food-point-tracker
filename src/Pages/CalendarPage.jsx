import ReactCalendar from '../Components/Calendar';

export function CalendarPage(){
    return(
    <>
    <h1>Calendar</h1>
    <p>Choose the dates you will not be at Duke:</p>
      <div>
        <ReactCalendar/>
      </div>

    </>
      )
}

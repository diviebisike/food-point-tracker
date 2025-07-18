import ReactCalendar from '../Components/Calendar';

export function CalendarPage(){
    return(
    <>
    <div>
      <div className = "top-banner-default">
    <h1 className = "default_title">Calendar</h1>
    </div>
    <p className ="basic">Choose the dates you will not be at Duke:</p>
      <div className = "complex-cal-wrapper">
        <ReactCalendar/>
      </div>
      </div>
    </>
      )
}

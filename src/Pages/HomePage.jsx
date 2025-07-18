import SimpleCalendar from "../Components/BasicCal"
import '../SimpCal.css'

export function HomePage(){

    return(
        <>
        <div className = "top-banner-home">
            <h1 className = "duke_title"> Duke </h1>
            <h3 className = "dining_title"> DINING BUDGET TOOL</h3>
        </div>
        <h3 className = "basic">Calendar Integration</h3>
        <div className = "simp-cal-wrapper">
        <SimpleCalendar/>
        </div>
        </>
    )
}
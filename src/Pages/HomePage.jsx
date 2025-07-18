import SimpleCalendar from "../Components/BasicCal"
import '../SimpCal.css'
import { StatsPic } from "../Components/StatsPic"

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
        <hr/>
        <h3 className = "basic"> Tracking & Alerts</h3>
        <StatsPic />
        </>
    )
}
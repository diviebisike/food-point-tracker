import SimpleCalendar from "../Components/BasicCal";
import "../SimpCal.css";
import { StatsPic } from "../Components/StatsPic";
import { ToDealPage } from "../Components/ToDealPage";
import { ToFED } from "../Components/ToFED";

export function HomePage() {
  return (
    <>
      <div className="top-banner-home">
        <h1 className="duke_title">Duke</h1>
        <h3 className="dining_title">DINING BUDGET TOOL</h3>
      </div>

      <h3 className="basic">Tracking</h3>
      <StatsPic />

      
      <h3 className="basic">Calendar</h3>
      <div className = "whole-cal-sect">
            <div className="simp-cal-wrapper">
                <SimpleCalendar />
            </div>
            <h3 className = "cal-message">Use the calendar to mark the days you will be off campus</h3>
     </div>
     <hr />
     

      <h3 className="basic">Planning Tools</h3>
      <div className="planToolSect">
        <ToDealPage/>
        <ToFED/>
          
      </div>
    </>
  );
}
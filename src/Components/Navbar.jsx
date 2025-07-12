import { Link } from "react-router-dom";


export function Navbar(){
    return (
    <>
    <div className = "navbar">
    <Link className = "link-fix-width" to="/"><button className = "button-aesthetic">Your Statistics</button></Link>
    <Link className = "link-fix-width" to="/CalendarPage"><button className = "button-aesthetic">Calendar</button></Link>
    <Link className = "link-fix-width" to="/FoodDataPage"><button className = "button-aesthetic">Add Meals</button></Link>
    </div>
    </>

    )
}
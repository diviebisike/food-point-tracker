import { Link } from "react-router-dom"
import { Button } from "./Button"

export function Navbar(){
    return (
    <>
    
    <Link to="/">StatsPage</Link>

    <Link to="/CalendarPage">CalendarPage</Link>
    
    </>

    )
}
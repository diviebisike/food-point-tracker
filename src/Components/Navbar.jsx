import { Link } from "react-router-dom";

export function Navbar(){
    return (
    <>
    <Link to="/"><button>StatsPage</button></Link>
    <Link to="/CalendarPage"><button>CalendarPage</button></Link>
    </>

    )
}
import { Link } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";


export function Navbar(){
    return (
    <>
    <div className = "navbar">
    <Link className = "link-fix-width" to="/"><button className = "button-aesthetic"><IoHomeOutline size = {44}/></button></Link>
    <Link className = "link-fix-width" to="/StatsPage"><button className = "button-aesthetic"><FaChartLine size ={34}/></button></Link>
    <Link className = "link-fix-width" to="/CalendarPage">
        <button className = "button-aesthetic"> <CiCalendarDate size ={54}/>
        </button></Link>
    <Link className = "link-fix-width" to="/FoodDataPage"><button className = "button-aesthetic">Log-in</button></Link>
    <Link className = "link-fix-width" to="/DealPage"><button className = "button-aesthetic"><IoFastFoodOutline size = {44}/></button></Link>

    </div>
    </>

    )
}
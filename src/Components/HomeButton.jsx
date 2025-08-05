import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

export function HomeButton(){
   return(
    <>
    
    <Link to="/" className="home-butt">
      <IoHomeOutline size={44} />
    </Link>    </>
   );

}
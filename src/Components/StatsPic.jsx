import WeeklySpendingChart from '../assets/WeeklySpendingChart.png'
import {useNavigate} from 'react-router-dom';


export function StatsPic(){
    const navigate = useNavigate();
  
    // handle click anywhere on calendar
    const handleClick = () => {
      navigate('/StatsPage');
    };
    return(
        <div onClick = {handleClick}>
        <img src = {WeeklySpendingChart} alt = "WeeklySpendingChart" className = "chart-pic"/>
        </div>
    );
}
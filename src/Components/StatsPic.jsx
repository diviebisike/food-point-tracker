import WeeklySpendingChart from '../assets/WeeklySpendingChart.png'
import {useNavigate} from 'react-router-dom';


export function StatsPic(){
    const navigate = useNavigate();
  
    // handle click anywhere on calendar
    const handleClick = () => {
      navigate('/StatsPage');
    };
    return(
        <div>
        <div className="tracking-stats-wrapper" onClick = {handleClick}>
        <img src = {WeeklySpendingChart} alt = "WeeklySpendingChart" className = "chart-pic"/>
        <div className="daily-points-box">
          <p>Left to Spend Today: </p>
          <h2>$14.67</h2>
          

        </div>
        </div>
        <hr />
        </div>
    );
}
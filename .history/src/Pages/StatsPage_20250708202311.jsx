//import './index.css'
import { Link } from "react-router-dom"
import "./StatsPage.css";

export function StatsPage() {
    return (
        <div className="stats-page">
            {/*Page Title*/}
            <h1> Stats Page </h1>

            {/*Food Points Section*/}
            <div className="stats-boxes">
                <div className="stat-box">
                    <p>Today's Food Points</p>
                    <h2>$30.33</h2>
                </div>
                
                <div className="stat-box">
                    <p>This Week's Food Points</p>
                    <h2>$212.31</h2>
                </div>
            </div>
        </div>
    );
}

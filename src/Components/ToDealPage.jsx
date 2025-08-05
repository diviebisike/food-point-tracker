import {useNavigate} from 'react-router-dom';


export function ToDealPage(){
    const navigate = useNavigate();
  
    const handleClick = () => {
        navigate('/DealPage');
    };

    return(
        <div onClick={handleClick} className = "sizeDeals">
            <h3 className = 'mealDealsButton'>$5 Deals</h3>
        </div>
    )
}
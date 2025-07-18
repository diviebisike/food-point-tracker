import {useState} from 'react'

export function FoodDataPage(){

    const [name, setName] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();
        setSubmission(true);
       // alert("You have " + name + " foodpoints");
    }
    const [submission, setSubmission] = useState(false);
 
return(
    <>
    <div className = "top-banner-default">
    <h1 className = "default_title"> Food Data Page</h1>
    </div>
    <div className = "basic">
    <form onSubmit ={handleSubmit}>
        <div>How many food points do you currently have?</div>
        <input type="text" value = {name} onChange={(e) => setName(e.target.value)} className = "input-button"/>
        <input type="submit" className = "submit-button"/>
        {
            submission &&(
                <div>You have <strong>{name}</strong> food points</div>
            )
        }
    </form>
    </div>
    </>
    )
}
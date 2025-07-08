import { useState } from "react"

export function Button({color}) {

    //props.text
    //props.color

    const[count, setCount] = useState[0]

    return(
        <button onClick ={() => setCount(count+1)} syle = {{backgroundColor: color}}>
            <p>
                {text}
            </p>
        </button>
    )
}
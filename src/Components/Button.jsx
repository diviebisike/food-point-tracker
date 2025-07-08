import { useState } from "react"

export function Button({color}) {

    //props.text
    //props.color

    const[count, setCount] = useState[0]

    return(
        <button syle = {{backgroundColor: color}}>
            <p>
                {text}
            </p>
        </button>
    )
}
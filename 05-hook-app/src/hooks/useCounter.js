import { useState } from "react"


export const useCounter = ( initialValue= 1 ) => {

const [ counter, setCounter ] = useState(initialValue)

    const increment = (quantity = 1) => {
        setCounter(counter + quantity); 
    }

    const decrement = (quantity = 1) => {
        // if (counter === 0) return;
        setCounter(counter - quantity); 
    }

    const reset = () => {
        setCounter( 0 ); 
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
import { useState } from "react";


export function Button() {

    const [number, setNumber] = useState(0)

    function increment(){
        setNumber(number + 1);
    }

    return (
        <button onClick={increment} >{number}</button>
    )
}

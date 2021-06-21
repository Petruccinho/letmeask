import { useState } from "react";

export function Button() {
    // let counter = 0;
    const [counter, setcounter] = useState(0)

    function increment() {
        setcounter(counter + 1);
        console.log(counter);
    }
    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}


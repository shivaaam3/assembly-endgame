import { useState } from "react"

export default function Keyboard() { 

    const [alphabetArr, setAlphabetAr] = useState(() => initAlphabetArray())

    function initAlphabetArray() { 
        return Array.from({ length: 26 }, (_, i) => i + 65).map(
            (item) => ({
                value: String.fromCharCode(item),
                pressed: false
            })
        )
    }

    return (
        <section className="alphabets">
            {alphabetArr.map((alp) => <button className="alphabet-element" key={alp.value}>{ alp.value }</button>)}
        </section>
    )
}
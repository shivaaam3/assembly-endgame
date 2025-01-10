import { useEffect, useState } from "react"
import Keyboard from "./Keyboard"
import Header from "./Header"
import Update from "./Update"
import Language from "./Language"
import Letters from "./Letters"


export default function Main() {

    // const [wordArray, setWordArray] = useState()
    const [gameWord, setGameWord] = useState("Banana")
    const [currentState, setCurrentState] = useState(Array(gameWord.length).fill(null))
    const [pressedKeys, setPressedKeys] = useState([])

    function onKeyClick(key) { 
        const keyOccuranceArr = findAllOccurences(key)
        setCurrentState(prevState => ( 
            prevState.map((letter, index) => (
                // Check if Key Occurance Array contains the current index of iteration of game state
                // If it does, populate that index of game state with the key
                keyOccuranceArr.indexOf(index) !== -1 ? key : letter
            ))
        ))

        // Update pressed key array with the key pressed
        // If keyOccuranceArr length is greater than zero, key pressed is valid
        setPressedKeys(prev => [...prev, { value: key, isValid: keyOccuranceArr.length > 0 }])
    }

    function findAllOccurences(key) { 
        const arr = [];
        for (let i = 0; i < gameWord.length; ++i) { 
            if (gameWord[i].toLowerCase() === key.toLowerCase())
                arr.push(i)
        }
        return arr
    }

    return (
        <main>
            <Header/>
            <Update />
            <Language />
            <Letters word={gameWord} currentWord={currentState} />
            <Keyboard pressedKeys={ pressedKeys } onClick={(alp) => { onKeyClick(alp) }} />
        </main>
    )
}


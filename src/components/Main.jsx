import { useState } from "react"
import Keyboard from "./Keyboard"
import Header from "./Header"
import Update from "./Update"
import Language from "./Language"
import Letters from "./Letters"


export default function Main() {

    // const [wordArray, setWordArray] = useState()
    const [gameWord, setGameWord] = useState("Stethoscope")
    const [currentState, setCurrentState] = useState(Array(gameWord.length).fill(0))
    const [pressedKeys, setPressedKeys] = useState([])
    const [attempts, setAttemps] = useState(8)
    const [isValid, setIsValid] = useState(true)

    let gameOverState = "playing"
    function checkForGameOver() { 
        if (attempts <= 0) { 
            console.log("GameOver: You lost")
            gameOverState = "lost"
            return
        }

        if (currentState.find(x => x === 0) === undefined) { 
            console.log("GameOver: You won")
            gameOverState = "won"
            return
        }
    }

    function decrementAttemps() {
        setAttemps(prevAttempts => prevAttempts - 1)
    }

    function onKeyClick(key) { 
        const keyOccuranceArr = findAllOccurences(key)
        const validKey = keyOccuranceArr.length > 0
        if (validKey) {
            // key is valid, update game state
            setCurrentState(prevState => (
                prevState.map((letter, index) => (
                    // Check if Key Occurance Array contains the current index of iteration of game state
                    // If it does, populate that index of game state with the key
                    keyOccuranceArr.indexOf(index) !== -1 ? key : letter
                ))
            ))
        } else { 
            // key is invalid, decrement attempts
            decrementAttemps()
        }
        // Update pressed key array with the key pressed
        // If keyOccuranceArr length is greater than zero, key pressed is valid
        setPressedKeys(prev => [...prev, { value: key, isValid: validKey }])
        setIsValid(validKey)
    }

    function findAllOccurences(key) { 
        const arr = [];
        for (let i = 0; i < gameWord.length; ++i) { 
            if (gameWord[i].toLowerCase() === key.toLowerCase())
                arr.push(i)
        }
        return arr
    }
    checkForGameOver()

    return (
        <main>
            <Header/>
            <Update validKey={isValid} gameOverState={gameOverState} />
            <Language attemps={attempts} />
            <Letters currentWord={currentState} />
            <Keyboard gameOverState={gameOverState} pressedKeys={ pressedKeys } onClick={(alp) => { onKeyClick(alp) }} />
        </main>
    )
}


import { useState } from "react"
import Keyboard from "./Keyboard"
import Header from "./Header"
import Update from "./Update"
import Language from "./Language"
import Letters from "./Letters"


export default function Main() {

    const [gameWord, setGameWord] = useState("Apple")
    const [pressedKeys, setPressedKeys] = useState([])
    
    let gameOverState = "playing"
    
    const wrongAttempts = pressedKeys.filter(x => !gameWord.toUpperCase().includes(x)).length
    const lastGuessedLetter = pressedKeys[pressedKeys.length - 1]
    const isValid = lastGuessedLetter && gameWord.toUpperCase().includes(lastGuessedLetter)

    function newGame() { 
        setGameWord("Apple")
        setPressedKeys([])
    }

    function checkForGameOver() { 
        if (wrongAttempts >= 8) { 
            console.log("GameOver: You lost")
            gameOverState = "lost"
            return
        }

        const gameWonCheck = gameWord.toUpperCase().split("").every(letter => pressedKeys.includes(letter))

        if (gameWonCheck) { 
            gameOverState = "won"
            return
        }
    }

    function onKeyClick(key) { 
        setPressedKeys(prev => [...prev, key])
    }

    checkForGameOver()
    return (
        <main>
            <Header/>
            <Update validKey={isValid} gameOverState={gameOverState} />
            <Language wrongAttempts={wrongAttempts} />
            <Letters
                gameWord={gameWord}
                pressedKeys={pressedKeys}
                gameOverState={gameOverState} 
                />
            <Keyboard
                gameWord={gameWord}
                pressedKeys={pressedKeys}
                gameOverState={gameOverState}
                onClick={(alp) => { onKeyClick(alp) }} />
            
            {gameOverState !== 'playing' && <button className="new-game" onClick={newGame}>New Game</button>}
        </main>
    )
}


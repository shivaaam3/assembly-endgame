import { useEffect, useState } from "react"

export default function Keyboard(props) { 

    const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


    function handleClick(pressed, key) { 
        if (pressed || props.gameOverState !== `playing`)
            return
        props.onClick(key)
    }

    function getButtonStyle(keyData) {
        let style = null
        if (keyData.pressed)
            style = keyData.isValid ? "right-key" : "wrong-key"

        if (props.gameOverState !== `playing`)
            style += ` game-over-key`
        return style
    }

    function getLetterData(letter) { 
        const pressedKey = props.pressedKeys.includes(letter)
        const letterData = { pressed: null, isValid: null }
        if (pressedKey) {
            letterData.pressed = true
            letterData.isValid = Array.from(props.gameWord.toUpperCase()).includes(letter)
        }
        return letterData
    }

    return (
        <section className="keys">
            { 
                Array.from(alphabetString).map(letter => { 
                    const letterData = getLetterData(letter)
                    return <button
                        className={`key-element ${getButtonStyle(letterData)}`}
                        key={letter}
                        onClick={() => { handleClick(letterData.pressed, letter) }}
                    >{letter}</button>
                })
            }
        </section>
    )
}
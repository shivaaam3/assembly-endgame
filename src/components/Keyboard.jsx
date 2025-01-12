import { useEffect, useState } from "react"

export default function Keyboard(props) { 

    const [keyboardArr, setKeyboardArr] = useState(() => initKeyboardArr())

    function initKeyboardArr() { 
        return Array.from({ length: 26 }, (_, i) => i + 65).map(
            (item) => ({
                value: String.fromCharCode(item),
                pressed: false,
                isValid: false
            })
        )
    }

    function checkIfKeyPressed(alp) { 
        return props.pressedKeys.find(x => x.value === alp)
    }

    useEffect(() => { 
        setKeyboardArr(prevArr => (
            prevArr.map(item => { 
                const getKeyData = checkIfKeyPressed(item.value)
                return getKeyData ? {...item, pressed: true, isValid: getKeyData.isValid} : item
            })))
    }, [props.pressedKeys])

    function handleClick(pressed, key) { 
        if (pressed || props.gameOverState !== `playing`)
            return
        props.onClick(key)
    }

    function getButtonStyle(key) {
        let style = null
        if (key.pressed)
            style = key.isValid ? "right-key" : "wrong-key"

        if (props.gameOverState !== `playing`)
            style += ` game-over-key`
        return style
    }

    return (
        <section className="keys">
            {keyboardArr.map((key) => <button
                className={`key-element ${getButtonStyle(key)}`}
                key={key.value}
                onClick={() => { handleClick(key.pressed, key.value) }}
            >
                {key.value}</button>)}
        </section>
    )
}
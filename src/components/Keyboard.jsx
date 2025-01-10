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
        if (pressed)
            return
        props.onClick(key)
    }

    function GetButtonStyle(key) { 
        if (key.pressed)
            return key.isValid ? "right-key" : "wrong-key"
        return null
    }

    return (
        <section className="keys">
            {keyboardArr.map((key) => <button
                className={`key-element ${GetButtonStyle(key)}`}
                key={key.value}
                onClick={() => { handleClick(key.pressed, key.value) }}
            >
                {key.value}</button>)}
        </section>
    )
}
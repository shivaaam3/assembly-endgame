export default function Game(props) {

    function foo(letter) { 
       return props.pressedKeys.find(x => x === letter) ? null : "red-text"
    }

    function getLetters() {
        if (props.gameOverState === 'playing') {
            return props.gameWord.toUpperCase().split('').map((letter, index) => {
                return <div key={index} className="letter-element">
                    <span className="letter-element-text">{props.pressedKeys.includes(letter) ? letter : null}</span>
                </div>
            })
        } else { 
            return props.gameWord.toUpperCase().split('').map((letter, index) => {
                return <span key={index} className={`letter-element-text ${foo(letter)}`}>{letter}</span>
            })
        }
    }



    return <div className="letters">
        { getLetters() }
    </div>
}
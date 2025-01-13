export default function Game(props) {

    function applyRedText(letter) { 
       return props.pressedKeys.find(x => x === letter) ? null : "red-text"
    }

    function getLetters() {
        return props.gameWord.toUpperCase().split('').map((letter, index) => {
            // If game is active, fill unguessed words with blank, if game is lost, fill them with the correct letters in red colour
            if (props.gameOverState === 'playing')
                return <span key={index} className="letter-element-text">{props.pressedKeys.includes(letter) ? letter : null}</span>
            else
                return <span key={index} className={`letter-element-text ${applyRedText(letter)}`}>{letter}</span>
        })
    }

    return <div className="letters">    
        { getLetters() }
    </div>
}
export default function Game(props) {

    function foo(letter) { 
       return props.currentWord.find(x => x === letter) ? null : "red-text"
    }

    function getLetters() {
        if (props.gameOverState === 'playing') {
            return props.currentWord.map((letter, index) => {
                return <div key={index} className="letter-element">
                    <span className="letter-element-text">{letter !== 0 && letter}</span>
                </div>
            })
        } else { 
            return props.gameWord.toUpperCase().split('').map((letter, index) => {
                return <div key={index} className="letter-element">
                    <span className={`letter-element-text ${foo(letter)}`}>{letter}</span>
                </div>
            })
        }
    }



    return <div className="letters">
        { getLetters() }
    </div>
}
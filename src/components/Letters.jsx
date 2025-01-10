export default function Game(props) {
    const letters = props.currentWord.map((letter, index) => { 
        return <div key={index} className="letter-element">
            <span className="letter-element-text">{letter}</span>
            </div>
    })

    return <div className="letters">
        { letters }
    </div>
}
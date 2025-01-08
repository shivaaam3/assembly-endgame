import Keyboard from "./Keyboard"

export default function Main() { 
    return (
        <main>
            <header>
                Assembly: Endgame
                <p className="game-description">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </header>

            <div className=" flex-column game-updates">
                <p className="updates-main-text">“Farewell HTML & CSS” 🫡</p>
                <p className="updates-sub-text"></p>
            </div>

            <div className="languages">
                <button style={{backgroundColor: '#E2680F', color: 'white'}} className="lang">HTML</button>
                <button style={{backgroundColor: '#328AF1', color: 'white'}} className="lang">CSS</button>
                <button style={{backgroundColor: '#F4EB13'}} className="lang">Javascript</button>
                <button style={{backgroundColor: '#2ED3E9'}} className="lang">React</button>
                <button style={{backgroundColor: '#298EC6', color: 'white'}} className="lang">Typescript</button>
                <button style={{backgroundColor: '#599137', color: 'white'}} className="lang">Node.js</button>
                <button style={{backgroundColor: '#FFD742'}} className="lang">Python</button>
                <button style={{backgroundColor: '#D02B2B', color: 'white'}} className="lang">Ruby</button>
                <button style={{backgroundColor: '#2D519F', color: 'white'}} className="lang">Assembly</button>
            </div>

            <div className="letters">
                <div className="letter-element">
                    <span className="letter-element-text">A</span>
                </div>
                <div className="letter-element">
                    <span className="letter-element-text">A</span>
                </div>
                <div className="letter-element">
                    <span className="letter-element-text">A</span>
                </div>
                <div className="letter-element">
                    <span className="letter-element-text">A</span>
                </div>
                <div className="letter-element">
                    <span className="letter-element-text">A</span>
                </div>
            </div>

            <Keyboard />

        </main>
    )
}


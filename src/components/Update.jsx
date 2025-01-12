export default function Update(props) {

    function updateCondition() { 
        return props.gameOverState === 'won' || props.gameOverState === 'lost' || !props.validKey
    }

    function getUpdataData(){
        if (props.gameOverState === 'playing')
            return { mainText: `“Farewell HTML & CSS” 🫡`, subText: null, class: null } 

        if (props.gameOverState === 'won')
            return { mainText: `You win!`, subText: `Well done! 🎉`, class: `won` } 

        if (props.gameOverState === 'lost')
            return { mainText: `You lost!`, subText: `You lose! Better start learning Assembly 😭`, class: `lost` } 

        return null
    }

    const updateClass = getUpdataData()
    return (
        !updateCondition() ? null : <div className= {`flex-column game-updates ${updateClass.class}`}>
            <p className="updates-main-text">{ updateClass.mainText }</p>
            <p className="updates-sub-text">{ updateClass.subText }</p>
        </div>
    )
}
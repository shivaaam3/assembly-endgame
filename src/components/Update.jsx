export default function Update(props) {



    function getFarewellText(language) {
        const options = [
            `Farewell, ${language}`,
            `Adios, ${language}`,
            `R.I.P., ${language}`,
            `We'll miss you, ${language}`,
            `Oh no, not ${language}!`,
            `${language} bites the dust`,
            `Gone but not forgotten, ${language}`,
            `The end of ${language} as we know it`,
            `Off into the sunset, ${language}`,
            `${language}, it's been real`,
            `${language}, your watch has ended`,
            `${language} has left the building`
        ];

        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    }

    function getUpdataData(){
        if (props.gameOverState === 'playing' && props.validKey === false)
            return { mainText: getFarewellText("loga"), subText: null, class: `update` } 

        if (props.gameOverState === 'won')
            return { mainText: `You win!`, subText: `Well done! 🎉`, class: `won` } 

        if (props.gameOverState === 'lost')
            return { mainText: `You lost!`, subText: `You lose! Better start learning Assembly 😭`, class: `lost` } 

        return { mainText: null, subText: null, class: null } 
    }

    const updateClass = getUpdataData()
    return (
       <div className= {`flex-column game-updates ${updateClass.class}`}>
            <p className="updates-main-text">{ updateClass.mainText }</p>
            <p className="updates-sub-text">{ updateClass.subText }</p>
        </div>
    )
}
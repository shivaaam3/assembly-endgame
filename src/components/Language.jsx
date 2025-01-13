
export default function Language(props) { 

    const lang = [
        { language: "HTML", backgroundColor: "#E2680F", color: "white"},
        { language: "CSS", backgroundColor: "#328AF1", color: "white"},
        { language: "Javascript", backgroundColor: "#F4EB13", color: "black"},
        { language: "React", backgroundColor: "#2ED3E9", color: "black"},
        { language: "Typescript", backgroundColor: "#298EC6", color: "white"},
        { language: "Node.js", backgroundColor: "#599137", color: "white"},
        { language: "Python", backgroundColor: "#FFD742", color: "black"},
        { language: "Ruby", backgroundColor: "#D02B2B", color: "white"},
        { language: "Assembly", backgroundColor: "#2D519F", color: "white"},
    ]

    function getStyle(item, index) { 
        return {
            color: index < props.wrongAttempts ? `red` : item.color,
            backgroundColor: index < props.wrongAttempts ? `rgba(94, 94, 94, 0.9)` : item.backgroundColor
        }
    }


    return <div className="languages">{
        lang.map((item, index) => (
            <span key={item.language} style={getStyle(item, index)} className="lang">{item.language}</span>
        ))
    }</div>
}

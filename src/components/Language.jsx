
import { languages } from "../assets/data/languages"

export default function Language(props) { 
    function getStyle(item, index) { 
        return {
            color: index < props.wrongAttempts ? `red` : item.color,
            backgroundColor: index < props.wrongAttempts ? `rgba(94, 94, 94, 0.9)` : item.backgroundColor
        }
    }


    return <div className="languages">{
        languages.map((item, index) => (
            <span key={item.name} style={getStyle(item, index)} className="lang">{item.name}</span>
        ))
    }</div>
}

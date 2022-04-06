function Paragrafs({part}){
    return(
        <p>{part.name} {part.exercises}</p>
    )
}

function Content({parts}){
    return (
        <div>
            <Paragrafs part={parts[0]}/>
            <Paragrafs part={parts[1]}/>
            <Paragrafs part={parts[2]}/>
        </div>
    )
}

export default Content;
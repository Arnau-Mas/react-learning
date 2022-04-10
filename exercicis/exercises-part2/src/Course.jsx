function Header({title}){
    return(
        <header>
            <h1>{title}</h1>
        </header>
    )
}

function Content({parts}){
    return(
        <div>
        {parts.map((part)=>{
            return(
                <p key={part.id}>{part.name}:{part.exercises}</p>
            )
        })}
        <p>Total of {parts.reduce((acc, part) => {
            return acc+part.exercises;
        }, 0)}</p>
        </div>
    )
}

function Course({courses}){
    return(
        <div>
            {courses.map((course)=>{
                return(
                    <div>
                        <Header key={course.id} title={course.name}></Header>
                        <Content key={course.id} parts={course.parts}></Content>
                    </div>
                )
            })}
        </div>
    )
}

export default Course;
function Content(props){
    return (
        <div>
            <p> 
                {props.p1} {props.ex1}
            </p>
            <p>
                {props.p2} {props.ex2}
            </p>
            <p>
                {props.p3} {props.ex3}
            </p>
        </div>
    )
}

export default Content;
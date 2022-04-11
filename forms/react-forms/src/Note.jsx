function Note({title, content}){
    return (
        <article className="Note">
            <h3>{title}</h3>
            <p>{content}</p>
        </article>
    )
}

export default Note;
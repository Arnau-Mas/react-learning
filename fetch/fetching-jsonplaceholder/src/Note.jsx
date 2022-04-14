function Note({userId, title, body}){
    return(
        <div className="card">
            <h3>{title}</h3>
            <p>{body}</p>
            <small>{userId}</small>
        </div>
    )
}

export default Note;
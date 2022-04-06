function Header(props){
    return (
        <h1>{props.title}</h1>
    )
}

export default Header;

/* opcions de desestructuració de props */

/* LA 1 */

/* function Header(props){
    return (
        <h1>{props.title}</h1>
    )
}

export default Header; */

/* LA 2 */

/* function Header(props){
    const {title} = props;
    return (
        <h1>{title}</h1>
    )
}

export default Header; */

/* LA 3 */
/* function Header({title}){
    return (
        <h1>{title}</h1>
    )
}

export default Header; */
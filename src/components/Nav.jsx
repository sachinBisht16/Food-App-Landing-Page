export default function ({navId, title, listElements}) {
    return (
        <nav id={navId}>
            <h1>{title}</h1>
            <ul>
                {listElements.map(el => <li><a href="">{el}</a></li>)}
            </ul>
        </nav>
    )
}   
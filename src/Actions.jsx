const Actions = ({moveRight, moveLeft}) => {
    return (
        <div className="action flex">
            <button onClick={moveRight}>&gt;</button>
            <button onClick={moveLeft}>&lt;</button>
        </div>
    )
}

export default Actions;
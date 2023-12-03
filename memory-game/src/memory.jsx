export function Memory() {
    return (
        <Gameboard 
            cardBack={images/pexels-matthew-montrone-1179229.jpg}
            // cardFront=
        />
    )
}

const Gameboard = ({ cardBack }) => {
    return (
        <>
        <h1>MEMORY</h1>
        <div className="gameboard">
            <div className="card">{cardBack}
            </div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </div>
        </>
    )
}
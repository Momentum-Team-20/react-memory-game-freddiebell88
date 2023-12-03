import images from './images.json'

export function Memory() {  
    // const cardBackImage = "memory-game/src/images/pexels-matthew-montrone-1179229.jpg"
    return ( 
        <Gameboard 
            cardBack={images.cardBackImage}
            cardFront={images.frontCardImage}
        />
    )
}

export default Memory

const Gameboard = ({ cardBack, cardFront }) => {
    return (
        <>
        <h1>MEMORY</h1>
        <div className="gameboard">
            <div className="card">
                <img src={ cardBack } alt="image of pine trees is the back of card" />
            </div>
            <div className="card">
                <img src={ cardFront } alt="dancer" />
            </div>
            <div className="card"></div>
            <div className="card"></div>
        </div>
        </>
    )
}
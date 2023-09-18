import React from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const FlowerShower = () => {
    const { width, height } = useWindowSize()
    const confettiConfig = {
        angle: 90,
        spread: 120,
        startVelocity: 45,
        elementCount: 100, // Number of heart confetti pieces
        decay: 0.9,
        shapes: ['heart'], // Use the built-in heart shape
        zIndex: 1000,
    };

    return (
        <div className="heart-confetti-container">
            <Confetti
                width={width}
                height={height}
                {...confettiConfig} />
        </div>
    );
}

export default FlowerShower;
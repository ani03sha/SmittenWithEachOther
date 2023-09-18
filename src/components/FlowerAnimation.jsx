import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const FlowerShower = () => {
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
            <Confetti {...confettiConfig} />
        </div>
    );
}

export default FlowerShower;
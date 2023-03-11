import React from 'react'

const CarList = ({data}) => {
    return (
    <div>
        {data.map((car, idx) => (
            <div>
                <span>{car.make}</span>
            </div>
        ))}
    </div>
    )
}

export default CarList
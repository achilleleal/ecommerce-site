import React from 'react'

export default function ItemCard({ item, price, preview }) {
    return (
        <div className="card">
            <img src={preview} />
            <div className="card-description">
                <h2>{item}</h2>
                <h2>{price}</h2>
            </div>
        </div>
    )
}

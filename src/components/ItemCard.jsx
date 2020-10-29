import React from 'react'

export default function ItemCard({ name, price, image, viewItem }) {
    return (
        <article className="card" onClick={viewItem}>
            <img src={image} alt={name} className="card_image" />
            <div>
                <h2 className="card_title">{name}</h2>
                <h3>{price}</h3>
            </div>
        </article>
    )
}

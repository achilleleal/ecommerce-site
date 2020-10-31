import React from 'react'

export default function ItemCard({ name, price, image, viewItem, inCart }) {
    return (
        <article className="card grow pointer" onClick={viewItem}>
            <img src={image} alt='' className="card_image" />
            <hr />
            <div className="flex between center-y">
                <div>
                    <h2>{name}</h2>
                    <h3>{price}</h3>
                </div>
                <h3 className="ok">{inCart ? 'In cart' : ''}</h3>
            </div>
        </article>
    )
}

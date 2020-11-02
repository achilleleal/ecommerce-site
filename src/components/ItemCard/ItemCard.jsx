import React from 'react'
import chair from '../../assets/chair.png' //placeholder

export default function ItemCard({ name, price, image, stock, viewItem, inCart }) {
    return (
        <article className="card grow pointer" onClick={viewItem}>
            <div className="card-image">
                <img src={chair} alt='' />
            </div>
            <hr />
            <div className="flex between center-y">
                <div>
                    <h2>{name}</h2>
                    <h3>{price}</h3>
                </div>
                <p className={stock ? 'ok' : 'err'}>
                    {inCart && 'In cart'}
                    {stock ? '' : 'Out of stock'}
                </p>
            </div>
        </article>
    )
}

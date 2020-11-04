import React from 'react'
import styles from './ItemCard.module.sass'

export default function ItemCard({ name, price, image, stock, viewItem, inCart }) {
    return (
        <article className={`card grow flex col center-x center-y pointer ${styles.card}`} onClick={viewItem}>
            <div className={styles.img_container}>
                <img src={image} alt=''/>
            </div>
            <div className={styles.info}>
                <div>
                    <h2>{name}</h2>
                    <h3>{price}</h3>
                </div>
                <p className={`txt-center ${stock ? 'ok' : 'err'}`}>
                    {inCart && 'In cart'}
                    {stock ? '' : 'Out of stock'}
                </p>
            </div>
        </article>
    )
}

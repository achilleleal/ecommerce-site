import React from 'react'
import StarCount from '../Star/StarCount'
import styles from './ItemCard.module.sass'

export default function ItemCard({ name, price, image, stock, reviews, viewItem, inCart }) {
    
    const ratingAverage = () => {
        try {
            return reviews.reduce(
                    (total, review) => total + review.rating, 0
                ) / reviews.length
        } catch {
            return 0
        }
    }

    console.log(inCart, name)

    return (
        <article className={`card grow flex col center-x center-y pointer ${styles.card}`} onClick={viewItem}>
            <div className={styles.img_container}>
                <div>
                    <img src={image} alt='' />
                </div>
            </div>
            <div className={styles.info}>
                <div>
                    <div className="flex">
                        <StarCount rating={ratingAverage()} />
                        ({reviews.length || 0})
                    </div>
                    <h2>{name}</h2>
                    <h3>{price}</h3>
                </div>
                <h4 className={`txt-center ${stock ? 'ok' : 'err'}`}>
                    {inCart && 'In cart'}
                    {stock ? '' : 'Out of stock'}
                </h4>
            </div>
        </article>
    )
}

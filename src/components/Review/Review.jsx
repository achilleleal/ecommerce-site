import React from 'react';
import luffy from './luffy.png'; //PLACEHOLDER
import styles from './Review.module.sass'

export default function Review({ review }) {

    return (
        <div className={`card ${styles.review}`}>
            <div className={styles.user}>
            <img src={luffy} alt='' className={`profile-image ${styles.pf_image}`}/>
                <p>{review.user}</p>
            </div>
            <article className={styles.content}>
                <h3>{review.rating}</h3>
                <p>{review.content}</p>
                <span>{review.date}</span>
            </article>
        </div>
    )
}
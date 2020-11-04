import React from 'react';
import defaultPf from '../../assets/user.png'
import styles from './Review.module.sass'

export default function Review({ review }) {

    return (
        <div className={`card ${styles.review}`}>
            <div className={styles.user}>
                <img src={review.profileImg || defaultPf} alt='' className={`profile-image ${styles.pf_image}`}/>
                <p>{review.name}</p>
            </div>
            <article className={styles.content}>
                <h3>{review.rating}</h3>
                <p>{review.content}</p>
                <span>{review.date}</span>
            </article>
        </div>
    )
}
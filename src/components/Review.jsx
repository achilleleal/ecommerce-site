import React from 'react';
import luffy from './luffy.png'; //PLACEHOLDER
import styles from '../styles/review.module.css'

export default function Review({ user, profileImg, rating, date, content }) {
    return (
        <div className={`card ${styles.review}`}>
            <div className={styles.user}>
            <img src={luffy} alt='' className={`profile-image ${styles.pf_image}`}/>
                <p>{user}</p>
            </div>
            <article className={styles.content}>
                <h3>{rating}</h3>
                <p>{content}</p>
                <span>{date}</span>
            </article>
        </div>
    )
}
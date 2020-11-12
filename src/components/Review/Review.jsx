import React from 'react';
import StarCount from '../Star/StarCount'
import defaultPf from '../../assets/user.png'
import styles from './Review.module.sass'

export default function Review({ review }) {

    return (
        <div className={`card ${styles.review}`}>
            <div className={styles.user}>
                <img src={review.profileImg || defaultPf} alt='' className={`profile-image ${styles.pf_image}`}/>
                <p>{review.user || 'Unknown'}</p>
            </div>
            <article className={styles.content}>
                <h3 className="flex center-y">
                    <StarCount rating={review.rating}/>
                </h3>
                <p>{review.content}</p>
                <span>{review.date}</span>
            </article>
        </div>
    )
}
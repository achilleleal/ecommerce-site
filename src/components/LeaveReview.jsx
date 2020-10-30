import React, { useState } from 'react'
import styles from '../styles/LeaveReview.module.css'

export default function LeaveReview({ isLoggedIn, setRoute }) {
    
    const [review, setReview] = useState('')

    function postReview() {
        // Post Review
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Leave a review:</h2>
            <div className={styles.review_zone}>
                { isLoggedIn 
                    ? <>
                        <textarea type='text' 
                            placeholder="Leave a review" 
                            className={`${styles.input} round`}
                            maxLength="400"
                            onInput={(e) => setReview(e.target.value)}
                        />
                        <div className={styles.send_review}>
                            <button type='submit' 
                                onClick={postReview}
                                className={styles.btn}
                            >
                                Post
                            </button>
                        </div>
                        </>

                    : <>
                        <p>You must be signed in to leave a review.</p>
                        <button 
                        className={`${styles.btn} ${styles.signin}`} 
                        onClick={() => setRoute('signin')}
                        >
                            Sign in
                        </button>
                        </>
                }
            </div>
        </div>
    );
}

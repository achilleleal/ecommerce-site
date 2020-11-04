import React, { useState } from 'react'
import styles from './LeaveReview.module.sass'

export default function LeaveReview({ user, signIn }) {
    
    const [review, setReview] = useState('')

    function postReview() {
        // Post Review
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Leave a review:</h2>
            <div className={styles.review_zone}>
                { user 
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
                                className="btn"
                            >
                                Post
                            </button>
                        </div>
                        </>

                    : <>
                        <p>You must be logged in to leave a review.</p>
                        <button 
                          className={`btn ${styles.signin}`} 
                          onClick={signIn}
                        >
                            Sign In
                        </button>
                        </>
                }
            </div>
        </div>
    );
}

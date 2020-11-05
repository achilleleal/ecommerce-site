import React, { useState } from 'react'
import styles from './LeaveReview.module.sass'


export default function LeaveReview({ user, item, itemsRef, auth, signIn, firestore, firebase }) {
    
    const [review, setReview] = useState('')

    async function postReview(e) {
        if (review) {

            e.preventDefault();

            const { uid, displayName, photoURL } = auth.currentUser;

            const fullReview = {
                user: displayName,
                profileImg: photoURL,
                content: review,
                date: firebase.firestore.FieldValue.serverTimestamp(),
                uid: uid
            }
            
            const d = await itemsRef.where('name', '==', item.name).get()
            await d.forEach(i => console.log(i)
                // i.update({
                // reviews: firebase.firestore.FieldValue.arrayUnion(fullReview)
            // })
            )

            setReview('')
        }
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Leave a review:</h2>
            <div className={styles.review_zone}>
                { user 
                    ? <form onSubmit={postReview}>
                        <textarea type='text' 
                            placeholder="Leave a review" 
                            className={`${styles.input} round`}
                            maxLength="400"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                        <div className={styles.send_review}>
                            <button type='submit' 
                                className="btn"
                            >
                                Post
                            </button>
                        </div>
                      </form>

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

import React, { useState } from 'react'
import styles from './LeaveReview.module.sass'
import Input from '../Input/Input'

export default function LeaveReview({ user, item, itemsRef, signIn, firebase }) {
    
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)

    async function postReview(e) {
        if (review) {

            e.preventDefault();

            try {
                const { uid, displayName, photoURL } = user;
                
                const querySnapshot = await itemsRef
                    .where('name', '==', item.name)
                    .where('uid', '==', item.uid)
                    .get()
                
                querySnapshot.forEach(doc => {
                    const fullReview = {
                        user: displayName,
                        profileImg: photoURL,
                        content: review,
                        rating: rating,
                        uid: uid,
                    }
                    
                    doc.ref.update({
                        reviews: firebase.firestore.FieldValue.arrayUnion(fullReview)
                    })
                })

                setReview('')
                setRating(0)

            } catch(err) {
                console.log('There was an error writing the review', err)
            }
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
                            <Input 
                                name="Rating" 
                                type="number" 
                                max='5' 
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                placeholder=""
                            />
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

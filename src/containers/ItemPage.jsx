import React, { useState, useEffect } from 'react';
import OrderAmount from '../components/OrderAmount'
import Review from '../components/Review'
import LeaveReview from '../components/LeaveReview'
import styles from '../styles/ItemPage.module.css'
import list from '../reviews'

export default function ItemPage({ item, loggedIn, setRoute, stock, handleCart }) {

    const [reviews, setReviews] = useState([])
    const [inCart, setInCart] = useState(item.inCart)
    // Fetch the item's reviews
    useState(() => {
        // Fetch the product's reviews
        setReviews(list)
    }, [])


    // Amount of item to be added to cart
    const [amount, setAmount] = useState(1);

    const { image, name, price, description } = item;

    return (
        <div className={styles.page}>
            <section className={`card ${styles.card}`}>
                <img src={image} alt=''/>
                <article>
                    <div className={styles.head}>
                        <h1>{name}</h1>
                        <h1>{price}</h1>
                    </div>
                    {
                    <div className={styles.cart_zone}>
                        <button 
                          className='btn'
                          onClick={() => {
                            loggedIn 
                              ? handleCart(item, amount, setInCart)
                              : setRoute('signin')
                          }}
                        >
                            {!inCart ? 'Add to cart' : 'Remove from cart'}    
                        </button>
                        {!inCart && <OrderAmount amount={amount} setAmount={setAmount} />}
                    </div>
                    }
                    <h3>Product Info</h3>
                    <p className={stock ? 'ok' : 'err'}>
                        {stock 
                            ? `In stock: ${stock} left` 
                            : 'Out of stock'
                        }
                    </p>
                    <p>{description}</p>
                </article>
            </section>

            <div >
                <LeaveReview loggedIn={loggedIn} setRoute={setRoute}/>
                <h1>User reviews</h1>
                <div>
                    {reviews.map((review, i) => 
                            <Review
                                key={i}
                                user={review.username}
                                profileImg={review.profileImg}
                                rating={review.rating}
                                date={review.date}
                                content={review.content}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
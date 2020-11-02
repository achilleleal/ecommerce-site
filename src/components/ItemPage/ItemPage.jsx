import React, { useState, useEffect } from 'react';

import OrderAmount from '../OrderAmount/OrderAmount'
import Review from '../Review/Review'
import LeaveReview from '../LeaveReview/LeaveReview'

import styles from './ItemPage.module.sass'
import list from '../../assets/reviews'
import chair from '../../assets/chair.png';

export default function ItemPage({ item, loggedIn, setRoute, stock, handleCart }) {
    
    const { image, name, price, description } = item;

    const [reviews, setReviews] = useState([]);
    const [inCart, setInCart] = useState(item.inCart);
    const [amount, setAmount] = useState(1); // Amount of item to be added to cart


    // Fetch the item's reviews
    useEffect(() => {
        setReviews(list)
    }, [])


    function updateCart() {
        handleCart(item, amount)
        setInCart(prevInCart => !inCart)
    }
    
    
    return (
        <div className={styles.page}>

            <section className={`card ${styles.card}`}>
                <div className={styles.img_container}>
                    <img src={chair} alt=''/>
                </div>
                <article>
                    <div className={styles.head}>
                        <h1>{name}</h1>
                        <h1>{price}</h1>
                    </div>
                    <div className={styles.cart_zone}>
                        {Boolean(stock) &&
                            <>
                                <button 
                                className='btn'
                                onClick={() => {
                                    loggedIn 
                                    ? updateCart()
                                    : setRoute('signin')
                                }}
                                >
                                    {!inCart ? 'Add to cart' : 'Remove from cart'}    
                                </button>
                                {!inCart && 
                                    <OrderAmount 
                                    amount={amount} 
                                    setAmount={setAmount} 
                                    />
                                }
                            </>
                        }
                    </div>
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

            <div>
                <LeaveReview 
                  loggedIn={loggedIn} 
                  setRoute={setRoute}
                />
                <h1>User reviews</h1>
                <div>
                    {reviews.map((review, i) => 
                            <Review
                                key={i}
                                review={review}
                            />
                        )
                    }
                </div>
            </div>

        </div>
    )
}
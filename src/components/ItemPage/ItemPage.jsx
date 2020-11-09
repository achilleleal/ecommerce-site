import React, { useState } from 'react';

import OrderAmount from '../OrderAmount/OrderAmount'
import Review from '../Review/Review'
import LeaveReview from '../LeaveReview/LeaveReview'

import styles from './ItemPage.module.sass'


export default function ItemPage({ item, user, signIn, setRoute, stock, handleCart }) {
    
    const { image, name, price, description } = item;

    const [reviews] = useState(item.reviews);
    const [inCart, setInCart] = useState(item.inCart);
    const [amount, setAmount] = useState(1); // Amount of item to be added to cart


    function updateCart() {
        handleCart(item, amount)
        setInCart(prevInCart => !inCart)
    }
    
    
    return (
        <div className={styles.page}>

            <section className={`card ${styles.card}`}>
                <div className={styles.img_container}>
                    <img src={image} alt=''/>
                </div>
                <article>
                    <div className={styles.head}>
                        <h1>{name}</h1>
                        <h1>{price}</h1>
                    </div>
                    {user 
                      ? <div className={styles.cart_zone}>
                            {Boolean(stock)
                                &&   <>
                                        <button 
                                        className='btn'
                                        onClick={() => {
                                            user 
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
                      : <div className="flex between center-y">
                            <p>You must be signed in to add items to your cart.</p>
                            <button 
                              className="btn m1"
                              onClick={signIn}
                            >
                                Sign In
                            </button>
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
{/*
            <div>
                <LeaveReview 
                  user={user}
                  auth={auth}
                  item={item}
                  itemsRef={itemsRef}
                  signIn={signIn}
                  firestore={firestore}
                  firebase={firebase}
                />
                <h1>User reviews:</h1>
                <div>
                    {reviews.length
                        ? reviews.map((review, i) => 
                            <Review
                                key={review.uid}
                                review={review}
                            />
                          )
                        : <p className="txt-center m1">There aren't any reviews for this item yet. Be the first to write one!</p>
                    }
                </div>
            </div> */}

        </div>
    )
}
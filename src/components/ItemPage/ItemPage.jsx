import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import OrderAmount from '../OrderAmount/OrderAmount'
import Review from '../Review/Review'
import LeaveReview from '../LeaveReview/LeaveReview'
import styles from './ItemPage.module.sass'

import { signInWithGoogle } from '../../middleware/firebase'

import { generateKey } from '../../utils'



export default function ItemPage({ item, setCurrentItem, user, setRoute, handleCart, deleteItem }) {
    
    const { image, name, price, description, stock } = item;

    const [reviews] = useState(item.reviews);
    const [inCart, setInCart] = useState(item.inCart);
    const [amount, setAmount] = useState(1); // Amount of item to be added to cart


    function updateCart() {
        handleCart(item, amount)
        setInCart(prevInCart => !inCart)
    }
    
    // On unmount, clear current item to update the page title
    useEffect(() => {
        return () => setCurrentItem([])
    }, [])
    
    return (
        <div className={styles.page}>

            <section className={`card ${styles.card}`}>

                {user && user.uid === item.uid &&
                    <button className={styles.delete_btn} 
                      onClick={() => deleteItem(item)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                        Delete
                    </button>
                }

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
                              onClick={signInWithGoogle}
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

            <div>
                <LeaveReview 
                  user={user}
                  item={item}
                />
                <h1>User reviews:</h1>
                <div>
                    {reviews.length
                        ? reviews.map((review, i) => 
                            <Review
                                key={generateKey()}
                                review={review}
                            />
                          )
                        : <p className="txt-center m1">There aren't any reviews for this item yet. Be the first to write one!</p>
                    }
                </div>
            </div>

        </div>
    )
}
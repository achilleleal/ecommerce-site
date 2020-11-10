import React, { useState, useEffect } from 'react'
import CartCard from './CartCard'
import Checkout from './Checkout'
import './Cart.sass'

export default function Cart({ user, signIn, cart, viewItem, handleCart, clearCart }) {
    
    // Remove $ sign from price and turn into number
    const format = price => Number(price.slice(0, - 1))
    //Calculate total price
    const calcTotal = () => cart.reduce((t, i) => t + (format(i.price) * i.cartQuantity), 0).toFixed(2)


    const [total, setTotal] = useState(calcTotal())
    const [refreshCart, setRefreshCart] = useState(false) //Refresh page on click. This way allows the user to undo deleting an item.
    const [inCheckout, setInCheckout] = useState(false)
    const [hasPayed, setHasPayed] = useState(false)


    useEffect(() => {
        setTotal(calcTotal())        
    }, [refreshCart])


    if (user && cart.length) {

        return (
            <div className="card cart">
                <div className="txt-center" style={{marginBottom: '1rem'}}>
                    <button className="btn" onClick={() => setRefreshCart(prev => !prev)}>
                        Refresh Cart
                    </button>
                </div>
                
                {cart.map((item, i)=>
                        <CartCard
                            key={i}
                            item={item}
                            price={format(item.price)}
                            viewItem={() => viewItem(item)}
                            handleCart={handleCart}
                            setTotal={setTotal}
                        />
                    )
                }
                <h1>Total:{total}$</h1>
                <Checkout 
                  clearCart={clearCart}
                  inCheckout={inCheckout} 
                  setInCheckout={setInCheckout}
                  setHasPayed={setHasPayed} 
                />
            </div>
        );

    } else if (hasPayed) {
        return (
            <div className='empty-cart'>
                <h1>Thank you for your purchase!</h1>
            </div>
        )

    } else {
        return (
            <div className="empty-cart">
                <div className="txt-center">
                {user 
                    ? <>
                        <h2>Your cart is empty!</h2>
                        <p> Go browse some products :)</p>
                      </>

                    : <>
                        <h2>You must be logged in to see your cart</h2>
                        <button className='btn'
                        onClick={signIn}>
                            Log In
                        </button>
                      </>
                }
                </div>
            </div>
        )
    }
}
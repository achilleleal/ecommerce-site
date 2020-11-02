import React, { useState, useEffect } from 'react'
import CartCard from '../components/CartCard'
import '../styles/Cart.css'

export default function Cart({ loggedIn, setRoute, cart, viewItem, handleCart }) {
    
    // Remove $ sign from price to be able to multiply by the quantity
    const format = price => Number(price.split('$')[0]).toFixed(2)

    //Calculate total price
    const calcTotal = () => cart.reduce((t, i) => t + (format(i.price) * i.cartQuantity), 0).toFixed(2)

    const [total, setTotal] = useState(calcTotal())
    const [refreshCart, setRefreshCart] = useState(false) //Refresh page on click. This way allows the user to undo deleting an item.

    useEffect(() => {
        setTotal(calcTotal())        
    }, [refreshCart])


    if (loggedIn && cart.length) {

        return (
            <div className="cart">
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
            </div>
        );

    } else {
        return (
            <div className="empty-cart">
                <div className="txt-center">
                {loggedIn 
                    ? <>
                        <h2>Your cart is empty!</h2>
                        <p> Go browse some products :)</p>
                      </>

                    : <>
                        <h2>You must be logged in to see your cart</h2>
                        <button className='btn'
                        onClick={() => setRoute('login')}>
                            Log In
                        </button>
                      </>
                }
                </div>
            </div>
        )
    }
}
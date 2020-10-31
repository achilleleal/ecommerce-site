import React, { useState } from 'react'
import '../styles/Cart.css'

export default function Cart({ loggedIn, setRoute, cart, viewItem, handleCart }) {
    
    if (loggedIn && cart.length) {

        return (
            <div className="cart">
                {cart.map(item => 
                    <CartCard 
                        item={item}
                        viewItem={() => viewItem(item)}
                        handleCart={handleCart}
                    />
                )}
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

function CartCard({ item, viewItem, handleCart }) {

    const [inCart, setInCart] = useState(true)

    // Remove $ sign from price to be able to multiply by the quantity
    const format = price => price.split('$')[0]

    const { cartQuantity  } = item;

    return(
        <article className="card cart-card grow">
            <div onClick={viewItem} className="pointer cart-main">
                <img src={item.image} alt='' className="card-image" />
                <div className="cart-info">
                    <h2>{item.name} ({cartQuantity})</h2>
                    <h3>{format(item.price) * cartQuantity}$</h3>
                </div>
            </div>
            <button className="btn"
              onClick={() => handleCart(item, cartQuantity, setInCart)}
            >
                {inCart
                  ? 'X'
                  : 'Undo'}
            </button>
        </article>
    );
}
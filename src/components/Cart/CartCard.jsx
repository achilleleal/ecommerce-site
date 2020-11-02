import React, { useState } from 'react'

export default function CartCard({ item, price, viewItem, handleCart }) {

    const [inCart, setInCart] = useState(true)

    const { cartQuantity  } = item;

    return(
        <article className="card cart-card grow">
            <div onClick={viewItem} className="pointer cart-main">
                <img src={item.image} alt='' className="card-image" />
                <div className="cart-info">
                    <h2>{item.name} ({cartQuantity})</h2>
                    <h3>{price * cartQuantity}$</h3>
                </div>
            </div>
            <button 
              className="btn"
              onClick={() => {
                  handleCart(item, cartQuantity)
                  setInCart(prev => !prev)
              }}
            >
                {inCart ? 'X' : 'Undo'}
            </button>
        </article>
    );
}
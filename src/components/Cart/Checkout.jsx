// This is a practice project without lucrative purposes,
// so this component DOES NOT actually handle payments.
// It's just for showing how a complete app would look/work.

// It also doesn't check the Input fields to see if they are valid, 
// nor sends their values to any server.


import React from 'react'
import Input from '../Input/Input'

export default function Checkout({ clearCart, inCheckout, setInCheckout, setHasPayed }) {

    return (
        <div className='flex col center-x center-y'>
        <button 
          className='btn' 
          onClick={() => setInCheckout(prev => !prev)}>
            Checkout
        </button>
        {inCheckout &&
            <div className="m1">
                <form onSubmit={() =>{
                    setHasPayed(true)
                    setInCheckout(false)
                    clearCart()
                }}>
                    <Input 
                      name="Credit card" 
                      type="text"
                    />
                    <Input 
                      name="Phone number" 
                      type="text"
                    />
                    <Input 
                      name="Address" 
                      type="text"
                    />
                    <button className='btn' type='submit'>
                        Purchase
                    </button>
                </form>
            </div>
        }
        </div>
    )
}

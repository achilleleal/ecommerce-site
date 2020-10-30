import React from 'react'
import styles from '../styles/orderAmount.module.css'

export default function OrderAmount({ amount, setAmount }) {

    const addAmount = () => setAmount(amount + 1);

    const removeAmount = () => amount > 1 && setAmount(amount - 1);

    return (
        <div className={`flex ${styles.main_div}`}>
            <h2 className={styles.amount}>
                {amount}
            </h2>
            <div className="flex col">
                <button 
                  className={styles.btn} 
                  onClick={addAmount}
                >
                    +
                </button>
                <button 
                  className={styles.btn} 
                  onClick={removeAmount}
                >
                    -
                </button>
            </div>
        </div>
    )
}

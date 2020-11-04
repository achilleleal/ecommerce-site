import React from 'react'
import styles from './SellProduct.module.sass'

export default function SellInput({ name, type, onInput, placeholder, value, step }) {

    const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

    return (
        <div>
            <label htmlFor={name} className="pointer">{capitalize(name)}</label>
            <input type={type} 
              id={name} 
              value={value}
              placeholder={capitalize(placeholder || name)}
              className={styles.auth_input}
              onInput={onInput}
              step={step}
              min={step === 'price' ? '0.1' : '0'}
            />
        </div>
    )
}

import React from 'react'
import styles from './Auth.module.sass'

export default function AuthInput({ value, type, onInput, placeholder }) {

    const title = value.charAt(0).toUpperCase() + value.slice(1)

    return (
        <div>
            <label htmlFor={value} className="pointer">{title}</label>
            <input type={type} 
              id={value} 
              placeholder={placeholder || title}
              className={styles.auth_input}
              onInput={onInput}
            />
        </div>
    )
}

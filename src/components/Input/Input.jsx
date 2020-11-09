import React from 'react'
import './Input.sass'

export default function Input({ name, type, onInput, placeholder, value, step }) {

    const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

    return (
        <div>
            <label htmlFor={name} className="pointer">{capitalize(name)}</label>
            <input type={type} 
              id={name} 
              value={value}
              placeholder={capitalize(placeholder || name)}
              className='auth-input'
              onInput={onInput}
              step={step}
              min={step === 'price' ? '0.1' : '0'}
              required
            />
        </div>
    )
}

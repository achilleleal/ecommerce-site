import React from 'react'
import './Input.sass'

export default function Input({ name, type, onChange, placeholder, value, step, max }) {

    const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

    return (
        <div>
            <label htmlFor={name} className="pointer">{capitalize(name)}</label>
            <input type={type} 
              id={name} 
              value={value}
              placeholder={capitalize(placeholder || name)}
              className='auth-input'
              onChange={onChange}
              step={step}
              min={step === 'price' ? '0.1' : '0'}
              max={max}
              required
            />
        </div>
    )
}

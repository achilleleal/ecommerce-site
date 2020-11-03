import React, { useState } from 'react'
import AuthInput from './AuthInput'
import styles from './Auth.module.sass'

export default function LogIn({ toSignUp, onFormSubmit }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={`card ${styles.auth}`}>
            <h1 className={styles.title}>Log In</h1>
            <AuthInput 
              value="email" 
              type="email"
              onInput={e => setEmail(e.target.value)}/>
            <AuthInput 
              value="password" 
              type="password"
              onInput={e => setPassword(e.target.value)}
            />
            <p>
                Don't have an account?
                <span onClick={toSignUp}>
                  Sign up.
                </span>
            </p>
            <div className="flex center-x">
              <button type="submit"
                className='btn'
                onClick={() => onFormSubmit(email, password)}
              >
                  Log in
              </button>
            </div>
        </div>
    )
}

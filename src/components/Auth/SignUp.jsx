import React, { useState } from 'react'
import AuthInput from './AuthInput'
import styles from './Auth.module.sass'

export default function SignUp({ toLogIn, onFormSubmit }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={`card ${styles.auth}`}>
            <h1 className={styles.title}>Sign Up</h1>
            <form>
              <AuthInput 
                value="name" 
                type="text"
                onInput={e => setName(e.target.value)}
              />
              <AuthInput 
                value="email" 
                type="email"
                onInput={e => setEmail(e.target.value)}
              />
              <AuthInput 
                value="password" 
                type="password"
                placeholder="Password (min. 8 characters)"
                onInput={e => setPassword(e.target.value)}
              />
              <p>
                  Already have an account? 
                  <span onClick={toLogIn}> 
                  Log in.
                  </span>
              </p>
              <div className="flex center-x">
                <button type="submit"
                  className='btn'
                  onClick={() => onFormSubmit(email, password, name)}
                >
                    Sign up
                </button>
              </div>
            </form>
        </div>
    )
}

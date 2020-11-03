import React, { useState } from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

export default function Auth({ setUser, setRoute }) {
    
    const [hasAccount, setHasAccount] = useState(true);

    function onFormSubmit(email, password, name) {
      if (email && password.length >= 8) {
        setUser({
          name: name,
          email: email,
          password: password
        })
        setRoute('home')
      }
    }

    return hasAccount 

      ? <LogIn 
          toSignUp={() => setHasAccount(false)}
          onFormSubmit={onFormSubmit}
        />

      : <SignUp 
          toLogIn={() => setHasAccount(true)}
          onFormSubmit={onFormSubmit}
        />
}

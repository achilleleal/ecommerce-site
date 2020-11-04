import React from 'react'
import Searchbar from './Searchbar/Searchbar';
import Link from './Link'
import './Layout.sass'

export default function Layout({ children, setSearch, setRoute, user, signIn, signOut  }) {

    function handleUser() {
        !user 
          ? signIn()
          : signOut()
    }

    return (
        <>
            <header>
                <nav>
                    <ul className="nav-bar">
                        <Link 
                          to="ReactMart"
                          image=""
                          onClick={() => setRoute('home')}
                        />
                        <Link 
                          to="Cart"
                          image=""
                          onClick={() => setRoute('cart')}
                        />
                        {user &&
                          <Link 
                            to="Profile"
                            image=""
                            onClick={() => setRoute('profile')}
                          />
                        }
                        <Link 
                          to={user ? 'Sign Out' : 'Sign In'}
                          image=""
                          onClick={handleUser}
                        />
                    </ul>
                </nav>
                <Searchbar setSearch={setSearch} />
            </header>
            <main className="page">
                {children}
            </main>
            <footer>
                <p>Made with love by Sebastián Leal. 2020.</p>
            </footer>
        </>
    )
}

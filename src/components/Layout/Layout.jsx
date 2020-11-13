import React from 'react'

import { faStore, 
         faShoppingCart, 
         faMoneyCheckAlt, 
         faSignInAlt, 
         faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import Searchbar from './Searchbar/Searchbar';
import Link from './Link'
import { ReactComponent as Github } from '../../assets/github-logo.svg'
import './Layout.sass'

export default function Layout({ children, setSearch, routeTo, user, signIn, signOut  }) {

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
                          icon={faStore}
                          onClick={() => routeTo('home')}
                        />
                        <Link 
                          to="Cart"
                          icon={faShoppingCart}
                          onClick={() => routeTo('cart')}
                        />
                        {user &&
                          <Link 
                            to="Sell"
                            icon={faMoneyCheckAlt}
                            onClick={() => routeTo('sell')}
                          />
                        }
                        <Link 
                          to={user ? 'Sign Out' : 'Sign In'}
                          icon={user ? faSignOutAlt : faSignInAlt}
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
                <a href="https://github.com/achilleleal/ecommerce-site"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  <Github fill='white'/>
                </a>
            </footer>
        </>
    )
}
import React from 'react'
import Searchbar from './Searchbar/Searchbar';
import Link from './Link'
import './Layout.css'

export default function Layout({ children, setSearch, setRoute, logout }) {

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
                        <Link 
                          to="Profile"
                          image=""
                          onClick={() => setRoute('profile')}
                        />
                        <Link 
                          to="Logout"
                          image=""
                          onClick={() => logout()}
                        />
                    </ul>
                </nav>
                <Searchbar setSearch={setSearch} />
            </header>
            <div className="page">
                {children}
            </div>
            <footer>
                <p>Made with love by Sebastián Leal. 2020.</p>
            </footer>
        </>
    )
}

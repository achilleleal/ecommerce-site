import React from 'react'
import Searchbar from './Searchbar';

const Link = ({ to, onClick, image }) => {
    return (
        <li onClick={onClick} className="link">
            <img src={image} className="link_image" alt=''/>
            <h1>{to}</h1>
        </li>
    );
}

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
            <main>
                {children}
            </main>
            <footer>
                <p>Made with love by Sebastián Leal. 2020.</p>
            </footer>
        </>
    )
}

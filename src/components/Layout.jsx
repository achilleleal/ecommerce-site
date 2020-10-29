import React from 'react'

const Link = ({ to, onClick, image }) => {
    return (
        <li onClick={onClick} className="link">
            <img src={image} className="link_image" alt=''/>
            <h1>{to}</h1>
        </li>
    );
}

export default function Layout({ children, setRoute, logout }) {
    return (
        <>
            <header>
                <nav>
                    <ul className="nav-bar">
                        <Link 
                          to="ReactMart"
                          image=""
                          onClick={() => setRoute()}
                        />
                        <Link 
                          to="Cart"
                          image=""
                          onClick={() => setRoute()}
                        />
                        <Link 
                          to="Profile"
                          image=""
                          onClick={() => setRoute()}
                        />
                        <Link 
                          to="Logout"
                          image=""
                          onClick={() => logout()}
                        />
                    </ul>
                </nav>
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

import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <header>
                <h1 style={{margin: '10px auto'}}>FishMart</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>Sebastián Leal. 2020.</p>
            </footer>
        </>
    )
}

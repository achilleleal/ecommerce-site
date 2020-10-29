import React from 'react'

export default function SearchBox({ setSearch }) {
    return (
        <>
            <input type="text" 
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar"
              placeholder="Search for..."
            />
        </>
    )
}

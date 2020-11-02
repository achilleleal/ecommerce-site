import React from 'react'

export default function Link({ to, onClick, image }) {
    return (
        <li onClick={onClick} className="link">
            <img src={image} className="link_image" alt=''/>
            <h1>{to}</h1>
        </li>
    );
}
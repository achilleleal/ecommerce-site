import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Link({ to, onClick, icon }) {
    return (
        <li onClick={onClick} className="link">
            <FontAwesomeIcon icon={icon} size='2x' />
            <h1>{to}</h1>
        </li>
    );
}
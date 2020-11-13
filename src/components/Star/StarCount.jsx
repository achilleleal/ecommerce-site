import React from 'react'
import { generateKey } from '../../utils'
import Star from './Star'

export default function StarCount({ rating }) {

    let stars = [];
    
    for (let i = 0; i < 5; i++) {
        stars.push(<Star fill={i < rating ? true : false} key={generateKey()}/>)
    }

    return (
        <div className="flex center-y">
            {stars.map(s => s)}
        </div>
    )
}

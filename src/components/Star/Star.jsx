import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Star({ size, margin, fill }) {
    return (
        <FontAwesomeIcon 
          icon={faStar} 
          size={size} 
          style={{
              color: fill || fill === undefined ? '#ebac00' : '#cecece', 
              margin: margin,
            }}
        />
    )
}

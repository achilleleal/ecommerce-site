import React from 'react';
import luffy from './luffy.png'; //PLACEHOLDER

export default function Review({ user, profileImg, rating, date, content }) {
    return (
        <div className="card review">
            <div className="review_user">
            <img src={luffy} alt='' className="profile-image review_image"/>
                <p>{user}</p>
            </div>
            <article className="review_content">
                <h3>{rating}</h3>
                <p>{content}</p>
                <span>{date}</span>
            </article>
        </div>
    )
}
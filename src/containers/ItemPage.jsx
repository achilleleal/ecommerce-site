import React, { useState, useEffect } from 'react';
import Review from '../components/Review'

export default function ItemPage({ item }) {

    const [reviews, setReviews] = useState([{
    // PLACEHOLDER
        username: 'Don',
        profileImg: './luffy.png',
        rating: '4/5',
        date: '12/11/2002',
        content: 'pretty nice chair'
    },
    {
        username: 'Don',
        profileImg: './luffy.png',
        rating: '4/5',
        date: '12/11/2002',
        content: 'pretty nice chair'
    }])
    // Fetch the item's reviews
    // useState(() => {
        // Fetch the product's reviews
        // setReviews(data)
    // }, [])

    const { image, name, price, description } = item;

    return (
        <div id="item-page">
            <section className="card item-card">
                <img src={image} alt=''/>
                <article>
                    <div className="item-page_head">
                        <h1>{name}</h1>
                        <h1>{price}</h1>
                    </div>
                    <h3>Product Info</h3>
                    <p>{description}</p>
                </article>
            </section>

            <div >
                <h1>Reviews</h1>
                <div>
                    {reviews.map(review => 
                            <Review 
                                user={review.username}
                                profileImg={review.profileImg}
                                rating={review.rating}
                                date={review.date}
                                content={review.content}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}
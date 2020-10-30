import React, { useState, useEffect } from 'react';
import OrderAmount from '../components/OrderAmount'
import Review from '../components/Review'
import LeaveReview from '../components/LeaveReview'

export default function ItemPage({ item, isLoggedIn, setRoute }) {

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

    // Amount of item to be added to cart
    const [amount, setAmount] = useState(1);

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
                    <OrderAmount amount={amount} setAmount={setAmount} />
                    <h3>Product Info</h3>
                    <p>{description}</p>
                </article>
            </section>

            <div >
                <LeaveReview isLoggedIn={isLoggedIn} setRoute={setRoute}/>
                <h1>User reviews</h1>
                <div>
                    {reviews.map((review, i) => 
                            <Review
                                key={i}
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
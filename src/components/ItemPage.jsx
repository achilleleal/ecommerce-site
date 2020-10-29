import React from 'react'

export default function ItemPage({ item }) {

    const { image, name, price, description } = item;

    return (
        <div id="item-page">
            <section className="card">
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
        </div>
    )
}

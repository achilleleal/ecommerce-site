import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Home.sass'

export default function Home({ items, viewItem }) {

    if (items) {
        if (items.length) {
            return (
                <div className="home">
                    {items.map((item, i) => 
                        <ItemCard 
                        key={i}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        stock={item.stock}
                        viewItem={() => viewItem(item)}
                        />)}
                </div>
            )
        }
            return (
                <p className="txt-center m1">Sorry, we couldn't find any matches.</p>
            )
    }
            return (
                <p className="txt-center m1">Loading</p>  
            )
}

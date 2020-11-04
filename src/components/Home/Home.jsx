import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './Home.sass'

export default function Home({ items, viewItem }) {

    return (
        <div className="home">
            {items.length 
                ? items.map((item, i) => 
                    <ItemCard 
                      key={i}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      stock={item.stock}
                      viewItem={() => viewItem(item)}
                    />
                )
                :<p>Loading</p>
            }
        </div>
    )
}

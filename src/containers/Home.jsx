import React from 'react';
import ItemCard from '../components/ItemCard';
import '../styles/Home.css'

export default function Home({ items, viewItem }) {

    return (
        <div className="home">
            {items.map((item, i) => 
                    <ItemCard 
                      key={i}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      viewItem={() => viewItem(item)}
                      inCart={item.inCart}
                    />
                )
            }
        </div>
    )
}

import React from 'react';
import ItemCard from '../components/ItemCard';

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
                    />
                )
            }
        </div>
    )
}

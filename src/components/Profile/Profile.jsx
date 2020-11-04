import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import './Profile.sass'
import defaultPf from '../../assets/user.png'

export default function Profile({ user, setUser, recentlyViewed, viewItem }) {

    

    return (
        <div className="profile">
            <div className='flex col center-x center-y'>
                <img 
                    src={user.profileImg || defaultPf}
                    className='profile-image'
                    alt=''
                />
                <h1>{user.name}</h1>
            </div>
            <h2>You recently viewed:</h2>
            {recentlyViewed.length
                ?  <div className='recents'>
                    {recentlyViewed.map((item, i) => 
                        <ItemCard 
                            key={i}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            stock={item.stock}
                            viewItem={() => viewItem(item)}
                            inCart={item.inCart}
                        />
                        )
                    }
                    </div>
                : <p>You haven't seen any items yet</p>
            }
            
            <div className="settings txt-center">
                <button className="delete">
                    Delete Account
                </button>
            </div>
        </div>
    )
}

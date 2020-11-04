import React, { useState, useEffect } from 'react';

import Layout from "./Layout/Layout";
import Home from './Home/Home';
import ItemPage from './ItemPage/ItemPage';
import Auth from './Auth/Auth';
import Cart from './Cart/Cart';
import Profile from './Profile/Profile'

import './App.sass'
import list from '../assets/products'

// TODO: Incorporate OrderAmount component inside CartCard
// TODO: Make React Context w/ loggedIn & setRoute
// TODO: Checkout

const blankUser = {
  name: 'abcdef',
  email: 'a@a.com',
  password: '123456789',
  profileImg: ''
}

function App() {

  //* STATE

    const [user, setUser] = useState(blankUser);
    const [route, setRoute] = useState('home'); // Routing
    const [search, setSearch] = useState(''); // Searchbar value
    const [items, setItems] = useState([]); // Store's products
    const [currentItem, setCurrentItem] = useState({});
    const [recentlyViewed, setRecentlyViewed] = useState([]); // Last 4 viewed items
    const [cart, setCart] = useState([]); // Shopping cart


  //* EFFECTS
    // Fetch items from server
    useEffect(() => {
      setItems(list)
    }, [])

    // Clear searchbar on route change
    useEffect(() => {
      setSearch('')
    }, [route])

    // Adds the last viewed item to recentlyViewed & deletes the last one if there are more than 4 items
    useEffect(() => {
      if (currentItem.name && !recentlyViewed.includes(currentItem)) {
        recentlyViewed.length >= 4 && recentlyViewed.pop()
        recentlyViewed.unshift(currentItem)
      }
    }, [currentItem])

    
  //* LOGIC

    const filterItems = arr => arr.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    // View the clicked on item
    function viewItem(item) {
      setCurrentItem(item);
      setRoute('item');
    }
    
    // Adds or removes the item from the cart and sets its quantity value
    function handleCart(item, quantity) {
      if (cart.includes(item)) {
        cart.splice(cart.indexOf(item), 1);
        item.inCart = false;
        item.quantity = 0;
      } else {
        cart.push(item);
        item.inCart = true;
        item.cartQuantity = quantity;
      }
    }

    console.log(recentlyViewed)

  return (
    <Layout 
      setRoute={setRoute} 
      setSearch={setSearch} 
      loggedIn={user.email} 
      logOut={() => setUser(blankUser)}
    >
      {/* PAGE ROUTING: When route matches, it returns the component.*/}

        {route === 'home' && 
            <Home 
              items={filterItems(items)} 
              viewItem={viewItem}
            />
        }

        {route === 'item' && 
            <ItemPage 
              item={currentItem} 
              loggedIn={user.email} 
              setRoute={setRoute}
              handleCart={handleCart}
              stock={currentItem.stock}
            />
        }

        {route === 'auth' &&
          <Auth
            setUser={setUser}
            setRoute={setRoute}
          />
        }

        {route === 'cart' && 
            <Cart 
              loggedIn={user.email}
              cart={cart} 
              viewItem={viewItem}
              handleCart={handleCart}
              setRoute={setRoute}
            />
        }

        {route === 'profile' && 
            <Profile
              user={user}
              setUser={setUser}
              recentlyViewed={recentlyViewed}
              viewItem={viewItem}
            />}
    </Layout>
  );
}

export default App;

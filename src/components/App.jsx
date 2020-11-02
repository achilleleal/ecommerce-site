import React, { useState, useEffect } from 'react';

import Layout from "./Layout/Layout";
import Home from './Home/Home'
import ItemPage from './ItemPage/ItemPage';
import Cart from './Cart/Cart';

import './App.sass'
import list from '../assets/products'

// TODO: Incorporate OrderAmount component inside CartCard
// TODO: Make React Context w/ loggedIn & setRoute
// TODO: Checkout


function App() {

  //* STATE
    const [loggedIn, setLoggedIn] = useState(false); // User auth, login & logout
    const [route, setRoute] = useState('home'); // Routing
    const [search, setSearch] = useState(''); // Searchbar value
    const [items, setItems] = useState([]); // Store's products
    const [currentItem, setCurrentItem] = useState({}); //
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

    
  //* FUNCTIONS

    // Logout user
    function logout() {
      setLoggedIn(false)
    }

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

  return (
    <Layout 
      setRoute={setRoute} 
      setSearch={setSearch} 
      loggedIn={loggedIn} 
      logout={() => setLoggedIn(!loggedIn)}
    >
      {/* PAGE ROUTING: When route matches, it returns the component.*/}

        {route === 'home' && 
            <Home 
              items={items} 
              viewItem={viewItem}
            />
        }

        {route === 'item' && 
            <ItemPage 
              item={currentItem} 
              loggedIn={loggedIn} 
              setRoute={setRoute}
              handleCart={handleCart}
              stock={currentItem.stock}
            />
        }

        {route === 'cart' && 
            <Cart 
              loggedIn={loggedIn}
              cart={cart} 
              viewItem={viewItem}
              handleCart={handleCart}
              setRoute={setRoute}
            />
        }

        {/* {route === 'profile' && <Profile />} */}
    </Layout>
  );
}

export default App;

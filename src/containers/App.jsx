import React, { useState, useEffect } from 'react';
import Layout from "./Layout";
import Home from './Home'
import ItemPage from './ItemPage';
import Cart from './Cart';
import list from '../products'

function App() {

  //* User auth, login & logout
    const [loggedIn, setLoggedIn] = useState(false);

    function logout() {
      setLoggedIn(false)
    }

  //* Routing
    const [route, setRoute] = useState('home');


  //* Searchbar
    const [search, setSearch] = useState('');
    // Clear searchbar on route change
    useEffect(() => {
      setSearch('')
    }, [route])


  //* Store's products
    const [items, setItems] = useState([]);
    // Fetch items from server
    useEffect(() => {
      // Fetch items from server
      setItems(list)
    }, [])

    const [currentItem, setCurrentItem] = useState({});

    function viewItem(item) {
      setCurrentItem(item);
      setRoute('item');
    }
   

  //* Shopping cart
  const [cart, setCart] = useState([]);
  
  // Adds or removes the item from the cart, and sets its quantity value
  function handleCart(item, quantity, setInCart) {
    if (cart.includes(item)) {
      cart.splice(cart.indexOf(item), 1);
      item.inCart = false;
      item.quantity = 0;
    } else {
      cart.push(item);
      item.inCart = true;
      item.cartQuantity = quantity;
    }
    setInCart(prevInCart => !prevInCart)
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

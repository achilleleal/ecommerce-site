import React, { useState, useEffect } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Layout from "./Layout/Layout";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Home from './Home/Home';
import ItemPage from './ItemPage/ItemPage';
import Cart from './Cart/Cart';
import SellProduct from './SellProduct/SellProduct';
import './App.sass';

import { auth, itemsRef } from '../middleware/firebase';

function App() {

  //* STATE

    const [user] = useAuthState(auth);

    const [items] = useCollectionData(itemsRef); // itemsRef turned into an array

    const [route, setRoute] = useState('home'); // Routing
    const [search, setSearch] = useState(''); // Searchbar value
    const [currentItem, setCurrentItem] = useState({});
    const [cart, setCart] = useState([]); // Shopping cart

    const [delStatus, setDelStatus] = useState(undefined);

  //* EFFECTS

    // Clear searchbar on route change & change document title to match route
    useEffect(() => {
      setSearch('');
      document.title = `${currentItem.name || route.charAt(0).toUpperCase() + route.slice(1)} | ReactMart`;
    }, [route, currentItem])

  
  //* LOGIC

    function routeTo(route) {
      setRoute(route)
      window.scrollTo(0,0)
    }
    
    const filterItems = arr => arr?.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))


    // View the clicked on item
    function viewItem(item) {
      setCurrentItem(item);
      routeTo('item');
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


    function clearCart() {
      // Clear the inCart & quantity property of every item
      items.forEach(item => {
        item.inCart = false;
        item.quantity = 0;
      })
      setCart([])
    }


    // Deletes the passed item if it was posted by current user
    async function deleteItem(item) {
      try {
        // From: https://stackoverflow.com/questions/47180076/how-to-delete-document-from-firestore-using-where-clause
        // Await the querySnapshot to modify the collection
        const querySnapshot = await itemsRef
          .where('name', '==', item.name)
          .where('uid', '==', user.uid)
          .get();
        
        // Delete the matching document based on its ref 
        // and update the state to show a success message
        querySnapshot.forEach(doc => {
          doc.ref.delete()
          setDelStatus(true)
        })
        
      } catch {
        setDelStatus(false) //Show error message

      } finally {
        setTimeout(() => {
          setDelStatus(undefined)
        }, 5000)
      }
      
      // Clear status message after 5 seconds
      routeTo('home')
    }


    const deleteStatusClasses = () => {
      if (delStatus !== undefined) {
        if (delStatus) {
          return 'ok' // Success
        }
        return 'err' // Error
      }
      return 'hide' // Nothing has been deleted. Don't show any messages
    }

  return (
    <Layout 
      routeTo={routeTo} 
      setSearch={setSearch} 
      user={user}
    >
      <ErrorBoundary>

        {/* Delete Message */}
        <h3 className={`${deleteStatusClasses()} txt-center m1`}>
          {delStatus
            ? 'Delete succesful!'
            : 'There was an error deleting the item'
          } 
        </h3>

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
              setCurrentItem={setCurrentItem}
              deleteItem={deleteItem}
              user={user}
              handleCart={handleCart}
            />
        }

        {route === 'cart' && 
            <Cart 
              user={user}
              cart={cart} 
              viewItem={viewItem}
              handleCart={handleCart}
              clearCart={clearCart}
            />
        }

        {route === 'sell' && 
            <SellProduct
              user={user}
              routeTo={routeTo}
            />
        }

      </ErrorBoundary>
    </Layout>
  );
}

export default App;

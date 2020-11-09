import React, { useState, useEffect } from 'react';

import Layout from "./Layout/Layout";
import Home from './Home/Home';
import ItemPage from './ItemPage/ItemPage';
import Cart from './Cart/Cart';
import SellProduct from './SellProduct/SellProduct';

import './App.sass';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'


firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore();


function App() {

  //* STATE

    const [user] = useAuthState(auth);

    const itemsRef = firestore.collection('items'); // Firebase collection that contains the store products
    const [items] = useCollectionData(itemsRef); // 

    const [route, setRoute] = useState('home'); // Routing
    const [search, setSearch] = useState(''); // Searchbar value
    const [currentItem, setCurrentItem] = useState({});
    const [cart, setCart] = useState([]); // Shopping cart

  //* EFFECTS

    // Clear searchbar on route change
    useEffect(() => {
      setSearch('')
    }, [route])
  
  //* LOGIC

    // Firebase signin
    function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider)
    }

    const filterItems = arr => arr?.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

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
      user={auth.currentUser}
      signIn={signInWithGoogle} 
      signOut={() => auth.signOut()}
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
              user={auth.currentUser} 
              signIn={signInWithGoogle}
              handleCart={handleCart}
              stock={currentItem.stock}
            />
        }

        {route === 'cart' && 
            <Cart 
              user={auth.currentUser}
              signIn={signInWithGoogle}
              cart={cart} 
              viewItem={viewItem}
              handleCart={handleCart}
            />
        }

        {route === 'sell' && 
            <SellProduct
              auth={auth}
              itemsRef={itemsRef}
              setRoute={setRoute}
            />
        }
    </Layout>
  );
}

export default App;

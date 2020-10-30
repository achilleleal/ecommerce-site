import React, { useState, useEffect } from 'react';
import Layout from "./Layout";
import Home from './Home'
import ItemPage from './ItemPage';
import list from '../products'

function App() {

  //* User auth, login & logout

    const [isLoggedIn, setLoggedIn] = useState(false);

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

  return (
    <Layout setRoute={setRoute} setSearch={setSearch} isLoggedIn={isLoggedIn} logout={() => setLoggedIn(!isLoggedIn)}>
      {/* PAGE ROUTING: When route matches, it returns the component.*/}
      {route === 'home' && <Home items={items} viewItem={viewItem}/>}
      {route === 'item' && <ItemPage item={currentItem} isLoggedIn={isLoggedIn} setRoute={setRoute}/>}
      {/* {route === 'cart' && <Cart />} */}
      {/* {route === 'profile' && <Profile />} */}
    </Layout>
  );
}

export default App;

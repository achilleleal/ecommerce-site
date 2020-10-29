import React, { useState, useEffect } from 'react';
import Layout from "./Layout";
import Home from './Home'
import ItemPage from './ItemPage';
import list from '../products'

function App() {

  const [route, setRoute] = useState('home');

  const [search, setSearch] = useState(''); //Searchbar value
  // Clear searchbar on route change
  useEffect(() => {
    setSearch('')
  }, [route])

  const [items, setItems] = useState([]); // Store products
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
    <Layout setRoute={setRoute} setSearch={setSearch}>
      {route === 'home'
        ? <Home items={items} viewItem={viewItem}/> 
      :(route === 'item'
          ? <ItemPage item={currentItem}/>
          : ''
      // :(route === 'cart' 
      //     ? <Cart />
      //     : <Profile />
      //       )
          )
      }
    </Layout>
  );
}

export default App;

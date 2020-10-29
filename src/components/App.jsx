import React, { useState, useEffect } from 'react';
import Layout from "./Layout";
import Home from './Home'
import ProductPage from './ProductPage';

function App() {

  const [route, setRoute] = useState('home');

  const [search, setSearch] = useState('')
  // Clear searchbar on route change
  useEffect(() => {
    setSearch('')
  }, [route])

  return (
    <Layout setRoute={setRoute} setSearch={setSearch}>
    {/* {route === 'home'
      ? <Home  /> 
     :(route === 'product'
        ? <ProductPage/>
     :(route === 'cart' 
        ? <Cart />
        : <Profile />
          )
        )
    } */}
    </Layout>
  );
}

export default App;

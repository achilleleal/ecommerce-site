import React, { useState } from 'react'
import SellInput from './SellInput'
import styles from './SellProduct.module.sass'

const blankProduct = {
    name: '',
    image: '',
    description: '',
    price: '',
    stock: '',
}

export default function SellProduct({ itemsRef, auth, setRoute }) {

    const [newProduct, setNewProduct] = useState(blankProduct)

    async function publishItem(e) {
        e.preventDefault();

        const { uid } = auth.currentUser;

        await itemsRef.add({
            ...newProduct,
            uid: uid
        })

        setRoute('home')
    }

    console.log(newProduct)

    return (
        <div className={styles.sell}>
            <h1 className='txt-center'>Sell a new product</h1>
            <div className='flex center-x'>
                <img src={newProduct.image} alt=""/>
            </div>
            <form onSubmit={publishItem}>
                <SellInput 
                  name="name" 
                  type="text"
                  value={newProduct.name}
                  onInput={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />
                <SellInput 
                  name="description" 
                  type="text"
                  onInput={(e) => setNewProduct({...newProduct, description: e.target.value})}
                />
                <SellInput 
                  name="image URL" 
                  type="text"
                  onInput={(e) => setNewProduct({...newProduct, image: e.target.value})}
                />
                <SellInput 
                  name="price ($)"
                  placeholder="Price"
                  type="number"
                  step='0.01'
                  onInput={(e) => setNewProduct({...newProduct, price: e.target.value + '$'})}
                />
                <SellInput 
                  name="stock" 
                  type="number"
                  onInput={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

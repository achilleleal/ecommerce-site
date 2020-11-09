import React, { useState } from 'react'
import Input from '../Input/Input'
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
            reviews: [],
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
                <Input 
                  name="name" 
                  type="text"
                  onInput={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />
                <Input 
                  name="description" 
                  type="text"
                  onInput={(e) => setNewProduct({...newProduct, description: e.target.value})}
                />
                <Input 
                  name="image URL" 
                  type="text"
                  onInput={(e) => setNewProduct({...newProduct, image: e.target.value})}
                />
                <Input 
                  name="price ($)"
                  placeholder="Price"
                  type="number"
                  step='0.01'
                  onInput={(e) => setNewProduct({...newProduct, price: e.target.value + '$'})}
                />
                <Input 
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

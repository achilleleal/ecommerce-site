import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'

import Input from '../Input/Input'
import styles from './SellProduct.module.sass'

import { itemsRef } from '../../middleware/firebase'


const blankProduct = {
    name: '',
    image: '',
    description: '',
    price: '',
    stock: 0,
}

export default function SellProduct({ user, routeTo }) {

    const [newProduct, setNewProduct] = useState(blankProduct)

    async function publishItem(e) {
        e.preventDefault();

        const { uid } = user;

        await itemsRef.add({
            ...newProduct,
            reviews: [],
            uid: uid
        })

        routeTo('home')
    }

    return (
        <div className={styles.sell}>
            <div className="flex center-x">
              <FontAwesomeIcon icon={faCubes} size='4x' />
            </div>
            <h1 className="txt-center">Sell a <span>new product</span></h1>
            <div className='flex center-x'>
                <img src={newProduct.image} alt=""/>
            </div>
            <form onSubmit={publishItem}>
                <Input 
                  name="name" 
                  type="text"
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />
                <Input 
                  name="description" 
                  type="text"
                  onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                />
                <Input 
                  name="image URL" 
                  type="text"
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                />
                <Input 
                  name="price ($)"
                  placeholder="Price"
                  type="number"
                  step='0.01'
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value + '$'})}
                />
                <Input 
                  name="stock" 
                  type="number"
                  onChange={(e) => setNewProduct({...newProduct, stock: Number(e.target.value)})}
                />
                <button className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

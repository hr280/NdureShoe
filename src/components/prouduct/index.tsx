import React from 'react'
import { ProductItem } from '../../store/state'
import { add, store } from '../../store/index'
import { useSelector } from 'react-redux'
import './index.css'
import { Link } from 'react-router-dom'
import Footer from '../home/footer'

export default function ProductDis() {

    const products = useSelector((state: ProductItem[]) => state)

    const product = products.map((product, i) => {
        return (
            <div key={i} >
                <div className="productContainer">
                    <Link className="link" to='#' >
                        <img src={product.src} alt="shoe" />
                        <h4>{product.name}</h4>
                        <button className="button" disabled={product.added} onClick={() => store.dispatch(add(product))}>Add To Cart</button>
                    </Link>
                </div>
                <div >
                </div>
            </div>
        )
    })

    return (
        <div className='dis-pro-container'>
            {product}
            <Footer />
        </div>
    )
}
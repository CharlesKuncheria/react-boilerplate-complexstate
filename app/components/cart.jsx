import React from 'react'
import Product from './product'

let Cart = (props) => (
    <section>
        <h2>Cart</h2>
        <section>
            {props.products.map(p => {
                return <Product use={'Remove'} name={p.name} handleClick={() => props.handleClick(p.id)}/>
            })}
        </section>
    </section>
)

export default Cart;
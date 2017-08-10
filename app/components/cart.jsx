import React from 'react'
import Product from './product'

let Cart = (props) => (
    <div>
        {props.products.map(p => {
            return <Product use={'Remove'} name={p.name} handleClick={() => props.handleClick(p.id)}/>
        })}
    </div>
)

export default Cart;
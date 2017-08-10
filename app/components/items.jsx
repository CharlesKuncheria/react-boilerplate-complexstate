import React from 'react'
import Product from './product'

let Items = (props) => (
    <div>
        {props.products.map(p => {
            return <Product name={p.name} use={'Add'} handleClick={() => props.handleClick(p.id)}/>
        })}
    </div>
)

export default Items;
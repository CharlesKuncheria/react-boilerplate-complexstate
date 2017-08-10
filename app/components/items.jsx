import React from 'react'
import Product from './product'

let Items = (props) => (
    <section>
        <h2>Items</h2>
        <section>
            {props.products.map(p => {
                return <Product name={p.name} use={'Add'} handleClick={() => props.handleClick(p.id)}/>
            })}
        </section>
    </section>
)

export default Items;
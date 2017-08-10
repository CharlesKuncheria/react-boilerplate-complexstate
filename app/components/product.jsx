import React from 'react'

let Product = (props) => (
    <section>
        <p>{props.name}</p>
        <button onClick={props.handleClick}>{props.use}</button>
    </section>
)

export default Product;
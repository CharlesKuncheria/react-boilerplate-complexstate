import React from 'react'

let Product = (props) => (
    <section>
        {props.name} <button onClick={props.handleClick}>{props.use}</button>
    </section>
)

export default Product;
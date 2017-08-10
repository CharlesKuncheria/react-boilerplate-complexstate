import React, { Component } from 'react'
import Cart from '../containers/Cart'
import Items from '../containers/items'

let App = (props) => (
  <div>
    <Cart store={props.store}/>
    <Items store={props.store}/>
  </div>
)

export default App;
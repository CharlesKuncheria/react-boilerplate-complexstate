import React, {Component} from 'react'
import  Cart from '../components/cart'
import {removeFromCart} from '../actions'

export default class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.getCartProducts(
                this.props.store.getState().items, 
                this.props.store.getState().cart)
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getCartProducts(items,cart) {
        return items.filter(i => {
            return (cart.indexOf(i.id) != -1)
        })
    }

    componentDidMount() {
        this.props.store.subscribe(this.handleChange)
    }

    handleChange() {
        this.setState({
            products: this.getCartProducts(
                this.props.store.getState().items, 
                this.props.store.getState().cart)
        });
    }

    handleClick(id) {
        this.props.store.dispatch(removeFromCart(id))
    }

    render(){
        return <Cart products={this.state.products} handleClick={this.handleClick}/>
    }
}
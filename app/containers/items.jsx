import React, {Component} from 'react'
import  Items from '../components/items'
import {addToCart} from '../actions'

export default class ItemsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.store.getState().items
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.store.subscribe(this.handleChange)
    }

    handleChange() {
        this.setState({
            products: this.props.store.getState().items
        });
    }

    handleClick(id) {
        this.props.store.dispatch(addToCart(id))
    }

    render(){
        return <Items products={this.state.products} handleClick={this.handleClick}/>
    }
}
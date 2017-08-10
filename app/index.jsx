import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import App from './components/App'
import rootReducer from './reducers'

var store = createStore(rootReducer);

ReactDOM.render(<App store={store}/>, document.getElementById('app'));

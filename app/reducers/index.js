import itemsReducer from './itemsReducer'
import cartReducer from './cartReducer'
import { combineReducers } from 'redux'


let reducer = combineReducers({
    cart: cartReducer,
    items: itemsReducer
});

export default reducer;
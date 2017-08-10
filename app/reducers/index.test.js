import reducer from './index.js'

describe('root reducer', () => {
    it('will add an item to cart', () => {
        expect(reducer(undefined, {type: 'ADD_TO_CART', payload: 1}).cart.length).toBe(1);
    })
})
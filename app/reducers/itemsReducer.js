var initialState = [
    {id:1, name:'Car', price:'10K'},
    {id:2, name:'Phone', price:'100'},
    {id:3, name:'Watch', price:'2K'}
];

export default function itemsReducer(state=initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
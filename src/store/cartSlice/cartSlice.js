import { createSlice } from "@reduxjs/toolkit"


// const initialState = {
//     cartItems: [],
//     totalQuantity: 0,
//     totalAmount: 0
// }


const initial = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}


if (localStorage.getItem('cartProducts') === null){
    localStorage.setItem('cartProducts', JSON.stringify(initial))
}

const initialState = JSON.parse(localStorage.getItem('cartProducts'))


const cartSlice = createSlice({
    name: "cart",
    // initialState,
    initialState,

    
    reducers:{
        addItem(state, action){
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item)=>item.id === newItem.id);
            state.totalQuantity++;

            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item)=> total + Number(item.price) * Number(item.quantity),
                0
            );

            localStorage.setItem('cartProducts', JSON.stringify(state))
        },

        removeItem(state, action){
            const id = action.payload;
            const existingItem = state.cartItems.find(
                (item)=>item.id === id);
            state.totalQuantity--;

            if(existingItem.quantity===1){
                state.cartItems = state.cartItems.filter((item)=> item.id!==id)
            }else{
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item)=> total + Number(item.price) * Number(item.quantity),
                0
            );

            localStorage.setItem('cartProducts', JSON.stringify(state))

        },

        deleteItem(state, action){
            const id = action.payload;
            const existingItem = state.cartItems.find(
                (item)=>item.id === id);

            if(existingItem){
                state.cartItems = state.cartItems.filter((item)=> item.id !== id)
                state.totalQuantity = Number(state.totalQuantity) - Number(existingItem.quantity)
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item)=> total + Number(item.price) * Number(item.quantity),
                0
            );

            localStorage.setItem('cartProducts', JSON.stringify(state))

        }
    }
    
})


export const cartActions = cartSlice.actions 
export default cartSlice
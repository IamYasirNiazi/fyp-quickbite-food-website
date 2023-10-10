// import { configureStore } from "@reduxjs/toolkit"
// import cartSlice from "./cartSlice/cartSlice"
// import cartUiSlice from "./cartSlice/cartUiSlice"

// const store = configureStore({
//     reducer: {
//         cart: cartSlice.reducer,
//         cartToggle: cartUiSlice.reducer
//     }
// })

// export default store



import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice/cartSlice"
import cartUiSlice from "./cartSlice/cartUiSlice"

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;
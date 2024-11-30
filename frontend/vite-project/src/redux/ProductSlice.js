import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products : localStorage.getItem('products') 
   ? JSON.parse(localStorage.getItem('products')) : [], 

  cart : localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state , action) => {
        const product = action.payload;
        state.products.push(product);
        localStorage.setItem('products' , JSON.stringify(state.products));
        console.log('product successfully in localstorage');
    },
    addProductToCart: (state , action) => {
        const cartItem = action.payload;
        state.cart.push(cartItem);
        localStorage.setItem('cart' , JSON.stringify(state.cart));
    },
    incrementByAmount: (state, action) => {
      
    },
  },

})

// Action creators are generated for each case reducer function
export const { addProduct, addProductToCart, incrementByAmount } = productSlice.actions

export default productSlice.reducer
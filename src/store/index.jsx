import { configureStore } from '@reduxjs/toolkit'
import isLoading from './slice/isLoading'
import products from './slice/Products'

export default configureStore({
    reducer: {
        isLoading ,
        products
    }
})


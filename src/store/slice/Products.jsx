import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading';

export const PorductsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts : (state, action) =>{
            return action.payload
        }
    }
})
//THUNK => Middleware
/*export const nameThunk = (data) => (dispatch) =>{
    //logica,instrucciones,peticiones
    dispatch (setProducts())
}
*/

//Closures

export const getProductsTunk = () => (dispatch) =>{

dispatch(setIsLoading(true))

axios
.get("https://e-commerce-api-v2.academlo.tech/api/v1/products/")
.then((resp) => dispatch(setProducts(resp.data)))
.catch((error) => console.error(error))
.finally( () => dispatch(setIsLoading(false)))
}

export const filterProductsByCategoryThunk =(id) => dispatch =>{
    dispatch(setIsLoading(true))
   axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
    .then(resp => dispatch(setProducts(resp.data)))
    .catch(error => console.error(error))
    .finally( () => dispatch(setIsLoading(false)))
}


export const { setProducts } = PorductsSlice.actions;

export default PorductsSlice.reducer;

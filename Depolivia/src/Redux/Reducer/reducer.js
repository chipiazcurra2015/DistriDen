//importar las action-type 

import { DELETE_PRODUCTO, GET_PRODUCTO, PUT_PRODUCTO } from "../Actions/action-type";

let initialState = {
    allUser : [],
    allProducto : [],
}

function rootReducer (state = initialState, action){
    switch (action.type) {
        case GET_PRODUCTO:
                return {
                    ...state,
                    allProducto: action.payload
                }
        case DELETE_PRODUCTO:
            return {
                ...state,
                allProducto: state.allProducto.filter(product => product.id !== action.payload.id)
                }
        case PUT_PRODUCTO:
            return {
                ...state,
                allProducto: state.allProducto.map(product => product.id === action.payload.id ? {
                    ...product, ...action.payload} : product
                )
                }
            break;
    
        default: return state
            break;
    }
}

export default rootReducer;
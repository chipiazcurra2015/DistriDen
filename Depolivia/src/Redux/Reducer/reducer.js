import { DELETE_PRODUCTO, GET_ALLPRODUCTO, GET_ALLUSER, GET_PRODUCTO, 
    GET_PRODUCTOBYID, PUT_PRODUCTO } from "../Actions/action-type";

let initialState = {
    allUser : [],
    allProducto : [],
    productoById: null
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
        case GET_PRODUCTOBYID:
            return{
                ...state,
                allProducto: action.payload
            }        
        case GET_ALLPRODUCTO:
            return{
                ...state,
                allProducto: action.payload
            }
              //USER//
        case GET_ALLUSER:
            return{
                ...state,
                allUser: action.payload
            }
            break;
    
        default: return state
            break;
    }
}

export default rootReducer;
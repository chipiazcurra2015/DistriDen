import { DELETE_PRODUCTO, DELETE_USER, GET_ALLPRODUCTO, GET_ALLUSER, GET_PRODUCTO, 
    GET_PRODUCTOBYID, GET_USERBYID, PUT_PRODUCTO, 
    PUT_USER} from "../Actions/action-type";

let initialState = {
    allUser : [],
    allProducto : [],
    productoById: null,
    userById: null,
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
            case DELETE_USER:
                return {
                    ...state,
                    allUser: state.allUser.filter(user => user.id !== action.payload.id)
                    }    
            case PUT_USER:
                return {
                    ...state,
                    allUser: state.allUser.map(user => user.id === action.payload.id ? {
                        ...user, ...action.payload} : user
            
                    )
                    }
            case GET_USERBYID:
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
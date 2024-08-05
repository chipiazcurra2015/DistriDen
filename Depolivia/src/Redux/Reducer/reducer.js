import { DELETE_PRODUCTO, DELETE_USER, GET_ALLPRODUCTO, GET_ALLUSER, GET_PRODUCTO, 
    GET_PRODUCTOBYID, GET_USERBYID, PUT_PRODUCTO, 
    PUT_USER, LOGIN,
    GET_ALLCLIENTE,
    DELETE_CLIENTE,
    PUT_CLIENTE,
    GET_CLIENTEBYID} from "../Actions/action-type";

let initialState = {
    allUser : [],
    allProducto : [],
    allCliente : [],
    productoById: null,
    userById: null,
    isAuthenticated: false,
    user: null,
    error: null,
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
                //LOGIN//
            case LOGIN:
                    return {
                        ...state,
                        isAuthenticated: true,
                        user: action.payload,
                        error: null
                    };
                  //CLIENTE//
        case GET_ALLCLIENTE:
            return{
                ...state,
                allCliente: action.payload
            }
            case DELETE_CLIENTE:
                return {
                    ...state,
                    allCliente: state.allCliente.filter(cliente => cliente.id !== action.payload.id)
                    }    
            case PUT_CLIENTE:
                return {
                    ...state,
                    allCliente: state.allCliente.map(cliente => cliente.id === action.payload.id ? {
                        ...cliente, ...action.payload} : cliente
            
                    )
                    }
            case GET_CLIENTEBYID:
                return{
                    ...state,
                    allCliente: action.payload
                } 
            break;
    
        default: return state
            break;
    }
}

export default rootReducer;
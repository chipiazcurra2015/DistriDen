//importar las action-type 

import { GET_PRODUCTO } from "../Actions/action-type";

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
            break;
    
        default: return state
            break;
    }
}

export default rootReducer;
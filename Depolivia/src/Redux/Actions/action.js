import axios from 'axios'
import { useDispatch } from 'react-redux'
import { GET_PRODUCTO } from './action-type'

export function getProducto (){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/product/")
            dispatch({
                type: GET_PRODUCTO,
                payload: response.data
            })
        } catch (error) {
            
        }
    }
}
export function postProducto (state){
    return async function(dispatch){
        try {
            await axios.post("http://localhost:3001/product/",state)
            alert("Producto creado con éxito")
        } catch (error) {
            alert (error.response.data.error)
        }
    }
}
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { DELETE_PRODUCTO, GET_PRODUCTO, PUT_PRODUCTO } from './action-type'

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
export function deleteProducto (id){
    return async function(dispatch){
        try {
            await axios.delete(`http://localhost:3001/product/${id}`);
            dispatch({
                type: DELETE_PRODUCTO,
                payload: {id}
            })
            alert("Producto ELIMINADO")
        } catch (error) {
            alert (error.response.data.error || 'Error al eliminar el producto')
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


export function putProducto(product) {
    return async function (dispatch) {
      try {
        const response = await axios.put(`http://localhost:3001/product/${product.id}`, product);
        dispatch({
          type: PUT_PRODUCTO,
          payload: response.data
        });
        alert("Producto actualizado con Éxito");
      } catch (error) {
        console.error('Error updating product:', error.response);
        alert(error.response.data.error);
      }
    };
  }
  
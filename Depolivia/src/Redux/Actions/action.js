import axios from 'axios'
import { useDispatch } from 'react-redux'
import { DELETE_PRODUCTO, GET_ALLPRODUCTO, GET_ALLUSER, GET_PRODUCTO, GET_PRODUCTOBYID, PUT_PRODUCTO } from './action-type'
 
//Action Producto// 
export function getallproducto(){
    return async function(dispatch){
        try {
           const response = await axios.get("http://localhost:3001/product/")
            dispatch({
                type: GET_ALLPRODUCTO,
                payload:response.data
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}
export function getProducto (){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/product/")
            dispatch({
                type: GET_PRODUCTO,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error)
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
        alert(error.response.data.error);
      }
    };
  }
  export function getproductobyid(id) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/product/${id}`);
            dispatch({
                type: GET_PRODUCTOBYID,
                payload: response.data
            });
        } catch (error) {
            alert(error.response.data.error);
        }
    }
}

//Action de Usuario//
export function getalluser(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/user/")
            dispatch({
                type: GET_ALLUSER,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}
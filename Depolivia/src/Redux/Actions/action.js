import axios from 'axios'
import { useDispatch } from 'react-redux'
import { DELETE_PRODUCTO, DELETE_USER, GET_ALLPRODUCTO,
     GET_ALLUSER, GET_PRODUCTO, GET_PRODUCTOBYID, GET_USERBYID, LOGIN, PUT_PRODUCTO, 
     PUT_USER, GET_ALLCLIENTE, DELETE_CLIENTE, PUT_CLIENTE, GET_CLIENTEBYID,
     GET_ALLZONA,
     DELETE_ZONA,
     PUT_ZONA,
     GET_ZONABYID} from './action-type'
 
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
export function postUser (state){
    return async function(dispatch){
        try {
            await axios.post("http://localhost:3001/user/",state)
            alert("Usuario creado con éxito")
        } catch (error) {
            alert (error.response.data.error)
        }
    }
}
export function deleteUser (id){
    return async function(dispatch){
        try {
            await axios.delete(`http://localhost:3001/user/${id}`);
            dispatch({
                type: DELETE_USER,
                payload: {id}
            })
            alert("Usuario ELIMINADO")
        } catch (error) {
            alert (error.response.data.error || 'Error al eliminar el usuario')
        }
    }
}
export function putUser(user) {
    return async function (dispatch) {
      try {
        const response = await axios.put(`http://localhost:3001/user/${user.id}`, user);
        dispatch({
          type: PUT_USER,
          payload: response.data
        });
        alert("Usuario actualizado con Éxito");
      } catch (error) {
        alert(error.response.data.error);
      }
    };
  }
  export function getUserbyid(id) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/user/${id}`);
            dispatch({
                type: GET_USERBYID,
                payload: response.data
            });
        } catch (error) {
            alert(error.response.data.error);
        }
    }
}
//LOGIN//
export function login(email, password) {
    return async function (dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/user/log',{ email, password });
        dispatch({
                type: LOGIN,
                payload: response.data
            });
        } catch (error) {
            alert(error.response.data.error);
        }
    }
}
//Action de Clientes//
export function getallCliente(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/customer/")
            dispatch({
                type: GET_ALLCLIENTE,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}
export function postCliente (state){
    return async function(dispatch){
        try {
            await axios.post("http://localhost:3001/customer/",state)
            alert("Cliente creado con éxito")
        } catch (error) {
            alert (error.response.data.error)
        }
    }
}
export function deleteCliente (id){
    return async function(dispatch){
        try {
            await axios.delete(`http://localhost:3001/customer/${id}`);
            dispatch({
                type: DELETE_CLIENTE,
                payload: {id}
            })
            alert("Cliente ELIMINADO")
        } catch (error) {
            alert (error.response.data.error || 'Error al eliminar el cliente')
        }
    }
}
export function putCliente(cliente) {
    return async function (dispatch) {
      try {
        const response = await axios.put(`http://localhost:3001/customer/${cliente.id}`, cliente);
        dispatch({
          type: PUT_CLIENTE,
          payload: response.data
        });
        alert("Cliente actualizado con Éxito");
      } catch (error) {
        alert(error.response.data.error);
      }
    };
  }
  export function getClientebyid(id) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/customer/${id}`);
            dispatch({
                type: GET_CLIENTEBYID,
                payload: response.data
            });
        } catch (error) {
            alert(error.response.data.error);
        }
    }
}
//Action de Zona//
export function getallZona(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/zona/")
            dispatch({
                type: GET_ALLZONA,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}
export function postZona (state){
    return async function(dispatch){
        try {
            await axios.post("http://localhost:3001/zona/",state)
            alert("Zona creada con éxito")
        } catch (error) {
            alert (error.response.data.error)
        }
    }
}
export function deleteZona (id){
    return async function(dispatch){
        try {
            await axios.delete(`http://localhost:3001/zona/${id}`);
            dispatch({
                type: DELETE_ZONA,
                payload: {id}
            })
            alert("Zona ELIMINADA")
        } catch (error) {
            alert (error.response.data.error || 'Error al eliminar Zona')
        }
    }
}
export function putZona(zona) {
    return async function (dispatch) {
      try {
        const response = await axios.put(`http://localhost:3001/zona/${zona.id}`, zona);
        dispatch({
          type: PUT_ZONA,
          payload: response.data
        });
        alert("Zona actualizada con Éxito");
      } catch (error) {
        alert(error.response.data.error);
      }
    };
  }
  export function getZonabyid(id) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/zona/${id}`);
            dispatch({
                type: GET_ZONABYID,
                payload: response.data
            });
        } catch (error) {
            alert(error.response.data.error);
        }
    }
}
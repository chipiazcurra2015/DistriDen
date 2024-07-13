import axios from 'axios'

export function getUser(){
    return async function(dispatch){
        try {
            await axios.get("http://localhost:5174/")
        } catch (error) {
            
        }
    }
}
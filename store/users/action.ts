import axios from 'axios'
import { DATA_ERR, GET_USERS,GET_MY_USERS} from './action-types'

export const getUsers = (id) => async dispatch => {
    
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: DATA_ERR,
            payload: error,
        })
    }

}

export const getMyUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users/6`)
        dispatch( {
            type: GET_MY_USERS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: DATA_ERR,
            payload: error,
        })
    }

}
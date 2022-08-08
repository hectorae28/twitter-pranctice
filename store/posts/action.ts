import axios from 'axios'
import { CREATE, DATA_ERR, GET_DATA} from './action-types'
/* 
export const create = (payload: any) => actionObject(CREATE, payload)
export const get_data = (payload: any) => actionObject(GET_DATA, payload)

const actionObject = (type: string, payload: any = null) => {
    return { type, payload }
} */

export const getPosts = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
        dispatch( {
            type: GET_DATA,
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
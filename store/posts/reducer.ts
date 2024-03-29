import { CREATE, GET_DATA, DATA_ERR } from './action-types'
import axios from 'axios';

const initialState = {
    posts:[],
    loading:true
}

const PostReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CREATE:
      return { ...state, ...{ post: payload } }
    case GET_DATA:
      return {
        ...state,
        post:action.payload,
        loading:false
        }
    case DATA_ERR:
      return{
        loading: false, 
        error: action.payload 
      }
    default:
      return state
  }
}

export default PostReducer

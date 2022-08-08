import {GET_USERS,GET_MY_USERS, DATA_ERR } from './action-types'
import axios from 'axios';

const initialState = {
    user:[],
    loading:true
}

const UserReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        user:action.payload,
        loading:false
        }
    case GET_MY_USERS:
      return {
        ...state,
        user:action.payload,
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


export default UserReducer

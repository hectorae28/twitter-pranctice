import { combineReducers } from "redux";
import post from './posts/reducer'

const reducers =combineReducers({
    post
})

export {reducers}
import { combineReducers } from "redux";
import post from './posts/reducer'
import user from './users/reducer'

const reducers =combineReducers({
    posts:post,
    users:user
})

export {reducers}
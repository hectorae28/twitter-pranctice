import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

const middleware=[thunk]
const initialState = {}

const store:any=createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
)

export {store}
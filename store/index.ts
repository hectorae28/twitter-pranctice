import { createStore } from "redux";
import { reducers } from "./reducers";

const store:any=createStore(
    reducers
)

export {store}
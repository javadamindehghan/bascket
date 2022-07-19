import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { postreducer } from "../reducer/postreducer";

export const store=createStore(postreducer,applyMiddleware(thunk))
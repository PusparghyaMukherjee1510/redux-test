import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import {reducer} from "./reducer/todo";
export const createMystore=()=>
           createStore[reducer,applyMiddleware(logger)];
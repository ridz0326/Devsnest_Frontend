import {nameReducer, mailReducer} from './userReducer' 


import { combineReducers } from "redux";

const rootReducer = combineReducers({
    name: nameReducer,
    email: mailReducer,
});

export default rootReducer;
import {combineReducers, createStore} from 'redux';
import {applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {ReducerUserAuth, ReducerSetInfluencerAndCompany}  from './reducers/reducer.jsx';
import UserDataReducer from './reducers/saveUserData.jsx';
import { OrderConfirmationReducer } from './reducers/orderConfirmationReducer.jsx';


const middlewares = applyMiddleware(thunk);

const reducer = combineReducers({  // import and add , additional-reducer here to combine
    ReducerUserAuth,
    UserDataReducer,
    ReducerSetInfluencerAndCompany,
    OrderConfirmationReducer
}) 


export const InflowenceStore = createStore(reducer, middlewares); 
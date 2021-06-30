import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import heroesReducer from './reducer'

const rootReducer = combineReducers({
  heroesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

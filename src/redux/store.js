import { configureStore, createStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { onFindHeroRequest } from "./sagas"
import heroesReducer from './slice'


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(heroesReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(onFindHeroRequest)
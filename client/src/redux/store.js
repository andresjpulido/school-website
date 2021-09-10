import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import commonReducer from './reducers/commonReducer'
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
    commonReducer, 
     authReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;
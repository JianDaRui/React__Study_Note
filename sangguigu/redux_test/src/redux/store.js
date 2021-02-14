// 

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './reducers/count'
import personReducer from './reducers/person'

export default createStore(countReducer, applyMiddleware(thunk))

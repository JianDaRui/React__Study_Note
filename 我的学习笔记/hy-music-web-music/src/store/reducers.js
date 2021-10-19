import { combineReducers } from 'redux'
import { reducer as RecommendReducer } from '../pages/discover/child-pages/recommend/store'
const cReducer = combineReducers({
  recommend: RecommendReducer
})

export default cReducer;
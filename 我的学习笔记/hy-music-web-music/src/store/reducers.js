import { combineReducers } from 'redux-immutable'
import { reducer as RecommendReducer } from '@/pages/discover/child-pages/recommend/store'
import { Map } from 'immutable'

const cReducer = combineReducers({
  recommend: RecommendReducer
})

export default cReducer;
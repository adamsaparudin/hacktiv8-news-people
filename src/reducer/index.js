import { combineReducers } from 'redux'

import NewsReducer from './NewsReducer'
import ActiveNews from './ActiveNews'

const rootReducer = combineReducers({
  News: NewsReducer,
  ActiveNews: ActiveNews
})

export default rootReducer

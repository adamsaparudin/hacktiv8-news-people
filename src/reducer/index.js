import { combineReducers } from 'redux'

import NewsReducer from './NewsReducer'
import ActiveNews from './ActiveNews'
import PeopleReducer from './People'
import QueryReducer from './Query'

const rootReducer = combineReducers({
  News: NewsReducer,
  ActiveNews: ActiveNews,
  People: PeopleReducer,
  Query: QueryReducer
})

export default rootReducer

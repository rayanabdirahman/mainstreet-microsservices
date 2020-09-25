import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { NavigationState } from './types'

export type State = {
  navigation: NavigationState
}

const middleware = [thunk,logger]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
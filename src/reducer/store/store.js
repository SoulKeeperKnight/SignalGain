import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { compact } from 'lodash'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { defaultReducers } from '../modules/defaultReducers'
import sagas from './sagas'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

const middlewares = compact([
  thunk,
  sagaMiddleware
])

let debuggWrapper = data => data

if (__DEV__) {
  debuggWrapper = composeWithDevTools({resulttime: true, port: 8000})
}

const store = createStore(
  rootReducer,
  defaultReducers,
  composeWithDevTools(compose(applyMiddleware(...middlewares)))
)

sagaMiddleware.run(sagas)

export default store
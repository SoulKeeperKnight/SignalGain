import { app, Auth } from '../modules'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
  app,
  Auth
})

export default function rootReducer(state, action) {
  let finalState = appReducer(state, action)
  return finalState
}
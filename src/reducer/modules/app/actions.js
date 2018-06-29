import { createAction } from 'redux-actions'
import { createPromiseAction } from '../utils'
import * as TYPE from './actionType'

export const appActionCreators = {
  appInit: createAction(TYPE.APP_INITAIALIZED),
  appChange: createAction(TYPE.API_ROOT_CHANGED)
}

import { createAction } from 'redux-actions'
import { createPromiseAction } from '../utils'
import * as TYPE from './actionType'

export const AuthActionCreators = {
  authPlayerId: createAction(TYPE.AUTH_PLAYER_ID),
  authSignUp: createPromiseAction(TYPE.AUTH_SIGN_UP),
  authSignUp_Success: createAction(TYPE.AUTH_SIGN_UP_SUCESS)
}
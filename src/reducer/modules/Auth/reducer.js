
import * as TYPE from './actionType'

import { defaultReducers } from '../defaultReducers'

const DEFAULT = defaultReducers.Auth

export function Auth(state = DEFAULT, action = {}) {
  const { type, payload } = action
  switch(type) {
    case TYPE.AUTH_SIGN_UP_SUCESS: {
      return {
        ...state,
        Name: payload.Name,
        Email: payload.Email,
        PhoneNumber: payload.PhoneNumber,
        Country: payload.Country,
        uuid: payload.uuid,
        PlayerId: payload.PlayerId
      }
    }
    case TYPE.AUTH_PLAYER_ID: {
      return {
        ...state,
        PlayerId: payload
      }
    }
    default: {
      return state
    }
  }
}
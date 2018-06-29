import * as TYPE from './actionType'

import { defaultReducers } from '../defaultReducers'

const DEFAULT = defaultReducers.app

export function app(state = DEFAULT, action = {}) {
  const { type, payload } = action
  switch(type) {
    case TYPE.APP_INITAIALIZED: {
      return {
        ...state,
        root: 'login'
      }
    }
    case TYPE.API_ROOT_CHANGED: {
      return {
        ...state,
        root: payload
      }
    }
    default: {
      return state
    }
  }
}
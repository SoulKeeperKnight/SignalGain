
import { put, call, fork, all, take} from 'redux-saga/effects'
import * as TYPE from './actionType'
import { AuthActionCreators } from './actions'
import { RestService } from '../../../utils/restService'

export function* asyncAuthRegister({payload, resolve, reject}) {
  try {
    const response = yield call(RestService, {
      api: 'users/signup',
      method: 'POST',
      params: payload
    })
    if ( response.success == true ) {
      yield  put(AuthActionCreators.authSignUp_Success({
        ...response.result
      }))
      resolve()
    } else {
      reject(response)
    }
  } catch (e) {
    reject(e)
  }
}

export function* watchAuthRegister() {
  while(true) {
    const action = yield take(TYPE.AUTH_SIGN_UP)
    yield* asyncAuthRegister(action)
  }
}

export default function* () {
  yield all([
    fork(watchAuthRegister)
  ])
}
import { fork, all } from 'redux-saga/effects'
import { appSaga, AuthSaga } from '../modules'

export default function* rootSaga() {
  yield all([
    fork(appSaga),
    fork(AuthSaga)
  ])
}
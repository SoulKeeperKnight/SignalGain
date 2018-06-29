import { put, call, fork, all, take} from 'redux-saga/effects'
import * as TYPE from './actionType'
import { appActionCreators } from './actions'

// export function* asyncAppInitialize({payload, resolve, reject}) {
//   yield put(appActionCreators.appInit())
// }

// export function* watchAppInit() {
//   while(true) {
//     const action = yield take(TYPE.APP_INITAIALIZED)
//     yield* asyncAppInitialize(action)
//   }
// }

export default function* () {
  yield all([
    // fork(watchAppInit)
  ])
}
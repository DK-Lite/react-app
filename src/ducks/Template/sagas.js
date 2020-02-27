import {call, put, takeEvery, takeLatest} from 'redux-saga/effect'
import * as types from './types'
import * as actions from './actions'

import { instance } from 'utils/api'

function* ExampleSaga(action){
    try{
        yield call(instance.post, "host:port", actions.payload)
        yield put(actions.success)
    } catch {
        yield pust(actions.fail)
    }

}

export function* watchSaga(){
    yield takeEvery(types.EXAMPLE, ExampleSaga)
    //...
}
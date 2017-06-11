import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';
import { PICKITEM_LOADING, PICKITEM_FAILURE, PICKITEM_SUCCESS, PICKITEM } from './PickAction';
export default function* PickSaga() {
    yield [
        takeEvery(PICKITEM_SUCCESS, function* () {
            yield put(showNotification('领取成功'));
            yield put(push('/'));
        })
    ];
}

import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';
import { asteroid } from '../asteroid';
import { ACCEPTAPPLY, ACCEPTAPPLY_LOADING, ACCEPTAPPLY_FAILURE, ACCEPTAPPLY_SUCCESS } from './acceptAction';
export default function* acceptSaga() {
	function* handleAccept(action){
		const {id, username} = action;
		yield asteroid.call('agent.order.accept', id, username);
		yield put(showNotification('领取成功'));
		yield put(push('/'));

	}
    yield [
        takeEvery(ACCEPTAPPLY, handleAccept),
        
    ];
}

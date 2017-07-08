import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';
import { asteroid } from '../asteroid';
import { UNPICK } from './UnpickAction';
export default function* UnpickSaga() {
	function* handle(action){
		const { id } = action;
		yield asteroid.call('agent.order.unpick', id);
		yield put(showNotification('取消成功'));
		yield put(push('/'));

	}
    yield [
        takeEvery(UNPICK, handle),
        
    ];
}

import { put, takeEvery,call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';
import { CHANGEPWD_LOADING, CHANGEPWD_FAILURE, CHANGEPWD_SUCCESS, CHANGEPWD } from './ChangePwdAction';

import { asteroid } from '../asteroid';

export default function* ChangePwdSaga() {
    yield [
        takeEvery(CHANGEPWD, function* (action) { 
			const { type, payload:{ username, oldpwd, newpwd }, meta: { fetch: fetchMeta, ...meta } } = action;
			var response = yield asteroid.call('checkPassword', username, oldpwd);
			if(response){
				var rel = yield asteroid.call('changePWD', username, newpwd);
				yield put(showNotification(`change the pwd ${newpwd}` ));
				return;
			}
			yield put(showNotification('Error oldpwd/newpwd'));
        }),
    ];
}

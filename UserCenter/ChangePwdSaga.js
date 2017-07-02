import { put, takeEvery, call, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';
import { CHANGEPWD_LOADING, CHANGEPWD_FAILURE, CHANGEPWD_SUCCESS, CHANGEPWD } from './ChangePwdAction';

import { asteroid, asteroidMethod } from '../asteroid';
const Changepwd = (username, newpwd)=>{
	return asteroid.call('changePWD', username, newpwd).then(response=>(response));
}
const Checkpwd = (username, oldpwd) =>{
	return asteroid.call('checkPassword', username, oldpwd).then(response=>(response));
}
const ChangePwdSaga = (callMethod) => {
	function* changePWD(action) { 
			const { type, payload:{ username, oldpwd, newpwd }, meta: { fetch: fetchMeta, ...meta } } = action;
			var response = yield call(Checkpwd, username, oldpwd);
			if(response){
				var rel = yield fork(Changepwd,username, newpwd);
				yield put(showNotification(`change the pwd ${newpwd}` ));
				return;
			}
			
			yield put(showNotification('Error oldpwd/newpwd'));
        }
    return function* watchChangePwd(){
		yield [
		    takeEvery(CHANGEPWD, changePWD),
		];
	};
};
export default ChangePwdSaga;
import { put, takeEvery, call, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';
import { CHANGEPWD_LOADING, CHANGEPWD_FAILURE, CHANGEPWD_SUCCESS, CHANGEPWD } from './ChangePwdAction';
import { asteroid, asteroidMethod } from '../asteroid';

const ChangePwdSaga = (callMethod) => {
  function* changePWD(action) {
    const { type, payload:{ oldpwd, newpwd }, meta: { fetch: fetchMeta, ...meta } } = action;
    var response = yield call([asteroid, asteroid.call], 'changePassword', oldpwd, newpwd);
    if (response.passwordChanged) {
      const result = yield call([asteroid, asteroid.call], 'setPWDReset');
      if (result) {
        yield put(push('/'));
      }
      yield put(showNotification('密码修改成功'));
    } else {
      yield put(showNotification('密码修改失败'));
    }
  }

  return function* watchChangePwd(){
    yield [
      takeEvery(CHANGEPWD, changePWD),
    ];
  };
};

export default ChangePwdSaga;

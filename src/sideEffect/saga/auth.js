import { put, call, takeEvery } from 'redux-saga/effects';
import { push, replace } from 'react-router-redux';

import { showNotification, hideNotification } from '../../actions/notificationActions';
import { SET_USER, SET_ROLE, UNSET_USER, UNSET_ROLE } from '../../actions/userActions'
import {
    USER_LOGIN,
    USER_LOGIN_LOADING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_CHECK,
    USER_LOGOUT,
    USER_PWD_RESET_CHECK
} from '../../actions/authActions';
import { FETCH_ERROR } from '../../actions/fetchActions';
import { AUTH_LOGIN, AUTH_CHECK, AUTH_ERROR, AUTH_LOGOUT,AUTH_GETROLE } from '../../auth';
import { roleMap } from '../../../Utils/role';
import { asteroid } from '../../../asteroid';

export default (authClient) => {
    if (!authClient) return () => null;
    function* handleAuth(action) {
        const { type, payload, error, meta } = action;
        //const { username } = payload;
        let roles;
        switch (type) {
        case USER_LOGIN: {
            try {
                const { username } = payload;
                yield put({ type: USER_LOGIN_LOADING });
                yield call(authClient, AUTH_LOGIN, payload);
                roles = yield call(authClient, AUTH_GETROLE, username);
                yield put({type:SET_USER, payload: username});
                yield put({type:SET_ROLE, payload: roleMap(roles)});
                yield put({ type: USER_LOGIN_SUCCESS });
                yield put(push(meta.pathName || '/'));
            } catch (e) {
                yield put({ type: USER_LOGIN_FAILURE, error: e, meta: { auth: true } });
                const errorMessage = typeof e === 'string'
                    ? error
                    : (typeof e === 'undefined' || !e.message ? 'aor.auth.sign_in_error' : e.message);
                yield put(showNotification(errorMessage, 'warning'));
            }
            break;
        }
        case USER_CHECK: {
            try {
                const userName = yield call(authClient, AUTH_CHECK, payload);
                roles = yield call(authClient, AUTH_GETROLE, userName);
                yield put({type:SET_USER, payload: userName});
                yield put({type:SET_ROLE, payload: roleMap(roles)});
                var rel = yield asteroid.call('checkPWDReset', userName);
                if(!rel){
                    yield put(replace({
                        pathname: '/UserInfo',
                        state: { nextPathname: meta.pathName },
                    }));
                    yield put(showNotification('请先修改初始密码', 'warning'));
                }
            } catch (e) {
                yield call(authClient, AUTH_LOGOUT);
                yield put(replace({
                    pathname: (e && e.redirectTo) || '/login',
                    state: { nextPathname: meta.pathName },
                }));
            }
            break;
        }
        case USER_LOGOUT: {
            yield call(authClient, AUTH_LOGOUT);
            yield put({type:UNSET_USER});
            yield put({type:UNSET_ROLE});
            yield put(push('/login'));
            break;
        }
        case FETCH_ERROR:
            try {
                yield call(authClient, AUTH_ERROR, error);
            } catch (e) {
                yield call(authClient, AUTH_LOGOUT);
                yield put(push('/login'));
                yield put(hideNotification());
            }
            break;
        }

    }
    return function* watchAuthActions() {
        yield [
            takeEvery(action => action.meta && action.meta.auth, handleAuth),
            takeEvery(FETCH_ERROR, handleAuth),
        ];
    };
};

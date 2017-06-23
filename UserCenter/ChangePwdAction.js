import { UPDATE } from 'admin-on-rest';
export const CHANGEPWD_LOADING = 'CHANGEPWD_LOADING';
export const CHANGEPWD_FAILURE = 'CHANGEPWD_FAILURE';
export const CHANGEPWD_SUCCESS = 'CHANGEPWD_SUCCESS';
export const CHANGEPWD = 'CHANGEPWD';
export const ChangePwd= (username, oldpwd, newpwd) => ({
    type: CHANGEPWD,
    payload: { username, oldpwd, newpwd },
    meta: { resource: 'users', cancelPrevious: false },
});
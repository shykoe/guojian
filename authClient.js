import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR, AUTH_GETROLE } from 'admin-on-rest';
import { asteroid } from './asteroid';
import { setLoggedUser, setLoggedUserRole } from 'admin-on-rest'


export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username,password } = params;
        
        return asteroid.loginWithPassword({username:username, password:password}).then( () => localStorage.setItem('username', username));
    }
    if(type === AUTH_GETROLE ){
        return asteroid.call('users.role',params);
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username') ? Promise.resolve(localStorage.getItem('username')) : Promise.reject();
    }
    return Promise.reject('Unkown method');
};

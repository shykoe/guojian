import { SET_USER, UNSET_USER, SET_ROLE, UNSET_ROLE } from '../actions';
const defaultState = {
    userName: '',
    Role:'',
};
export default (previousState = defaultState, { type, payload }) => {
    switch (type) {
    case SET_USER:
        return { ...previousState, userName: payload };
    case UNSET_USER:
        return { ...previousState, userName: defaultState.userName };
    case SET_ROLE:
        return { ...previousState, Role: payload };
    case UNSET_USER:
        return { ...previousState, Role: defaultState.Role };
    default:
        return previousState;
    }
};
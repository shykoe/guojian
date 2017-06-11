import { UPDATE } from 'admin-on-rest';
export const ACCEPTAPPLY_LOADING = 'ACCEPTAPPLY_LOADING';
export const ACCEPTAPPLY_FAILURE = 'ACCEPTAPPLY_FAILURE';
export const ACCEPTAPPLY_SUCCESS = 'ACCEPTAPPLY_SUCCESS';
export const ACCEPTAPPLY = 'ACCEPTAPPLY';
export const AcceptApply = (id, username) => ({
    type: ACCEPTAPPLY,
    id:id,
    username:username
});
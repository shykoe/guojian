import { UPDATE } from 'admin-on-rest';
export const PICKITEM_LOADING = 'PICKITEM_LOADING';
export const PICKITEM_FAILURE = 'PICKITEM_FAILURE';
export const PICKITEM_SUCCESS = 'PICKITEM_SUCCESS';
export const PICKITEM = 'PICKITEM';
export const PickItem = (id, data, basePath) => ({
    type: PICKITEM,
    payload: { id, data: { ...data, ispicked: true }, basePath },
    meta: { resource: 'Pick', fetch: UPDATE, cancelPrevious: false },
});
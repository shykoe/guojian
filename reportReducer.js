import { REPORT_INIT } from './MyCheck/reportAction';
export default (previousState = {}, { type, payload }) => {
    if (type === REPORT_INIT) {
        return payload;
    }
    return previousState;
};
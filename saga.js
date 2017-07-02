import acceptSaga from './Apply/acceptSaga';
import PickSaga from './Pick/PickSaga';
import ChangePwdSaga from './UserCenter/ChangePwdSaga';
import { asteroid } from './asteroid';
export default [
    acceptSaga,
    PickSaga,
    ChangePwdSaga(asteroid.call)
];
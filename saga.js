import acceptSaga from './Apply/acceptSaga';
import PickSaga from './Pick/PickSaga';
import ChangePwdSaga from './UserCenter/ChangePwdSaga';
import UnpickSaga from './MyItem/UnpickSaga'
import { asteroid } from './asteroid';
export default [
    acceptSaga,
    PickSaga,
    UnpickSaga,
    ChangePwdSaga(asteroid.call)
];
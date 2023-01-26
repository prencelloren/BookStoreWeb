import { combineReducers } from 'redux';
import Adminreducer from './adminReducer';
import Categoryreducer from './category_reducer';
import Studentreducer from './studentReducer';

const reducers = combineReducers({
    admin: Adminreducer,
    student: Studentreducer,
    category: Categoryreducer,
})
export default reducers;
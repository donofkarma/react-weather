import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// cuurently logged in user
// import userReducer from './user';

// combine reducers
const Reducers = combineReducers({
    router: routerReducer//,
    // userState: userReducer
});

export default Reducers;

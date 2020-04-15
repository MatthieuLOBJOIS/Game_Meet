import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';
import userReducer from './user';
import gamesReducer from './games';

const rootReducer = combineReducers({
	login: loginReducer,
	register: registerReducer,
	user: userReducer,
	games: gamesReducer
});

export default rootReducer;

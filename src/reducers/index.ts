import { combineReducers } from 'redux';
import loginReducer from './login';
import registerReducer from './register';
import userReducer from './user';
import gamesReducer from './games';
import friendsReducer from './friends';
import messagesReducer from './messages';

const rootReducer = combineReducers({
	login: loginReducer,
	register: registerReducer,
	user: userReducer,
	games: gamesReducer,
	friends: friendsReducer,
	messages: messagesReducer
});

export default rootReducer;

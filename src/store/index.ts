import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import userMiddleware from '../middleware/userMiddleware';
import gamesMiddleware from '../middleware/gamesMiddleware';
import friendsMiddleware from '../middleware/friendsMiddleware';
import loginMiddleware from '../middleware/loginMiddleware';
import registerMiddleware from '../middleware/registerMiddleware';
import reducer from '../reducers';

const enhancers = composeWithDevTools(
	applyMiddleware(
		userMiddleware,
		gamesMiddleware,
		friendsMiddleware,
		loginMiddleware,
		registerMiddleware
		// ... others middlewares
	)
);

const store = createStore(reducer, enhancers);

export default store;

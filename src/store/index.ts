import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import userMiddleware from '../middleware/userMiddleware';
import gamesMiddleware from '../middleware/gamesMiddleware';
import reducer from '../reducers';

const enhancers = composeWithDevTools(
	applyMiddleware(
		userMiddleware,
		gamesMiddleware
		// ... others middlewares
	)
);

const store = createStore(reducer, enhancers);

export default store;

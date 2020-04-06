import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import userMiddleware from '../middleware/userMiddleware';
import reducer from '../reducers';


const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    // ... others middlewares
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;

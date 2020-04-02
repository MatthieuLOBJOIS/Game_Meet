import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';
// import recipesMiddleware from '../middleware/recipesMiddleware';
// import userMiddleware from '../middleware/userMiddleware';

// const enhancers = composeWithDevTools(
//   applyMiddleware(
//     recipesMiddleware,
//     userMiddleware,
//     // ... d'autres middlewares
//   ),
// );

const store = createStore(
  // reducer
  reducer,
  // enhancer
  //enhancers,
);

export default store;

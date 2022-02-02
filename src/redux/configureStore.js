import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// combine one or more reducers
const reducer = combineReducers({
//   rocketReducer,
//   loadingReducer,
});

// create the store
const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;

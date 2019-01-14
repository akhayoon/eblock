import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../app/appReducer';

export default function configureStore(preloadedState) {
  const store = createStore(
    appReducer,
    applyMiddleware(thunk)
  );
  return store;
}

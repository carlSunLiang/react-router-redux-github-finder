import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers';


// redux 提供的 createStore API 把 rootReducer、initialState、middlewares 整合後創建出 store
const initialState = Immutable.Map();

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(reduxThunk, createLogger({ stateTransformer: state => state.toJS() }))
);
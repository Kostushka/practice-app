import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

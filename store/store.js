import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { marketReducer } from './market/marketReducer';
import { tabReducer } from './tab/tabReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    tab: tabReducer,
    market: marketReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
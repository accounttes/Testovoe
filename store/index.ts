// create a makeStore function
import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, createStore, compose } from 'redux';
import { reducer } from './reducers';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

let composeEnhancers = compose;

if (typeof window !== 'undefined') {
  composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
}

const makeStore = (context: Context) =>
  createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });

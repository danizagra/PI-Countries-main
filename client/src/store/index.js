import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
      reducer,
      composeWithDevTools( applyMiddleware(thunk))
   
   /*  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
);

export default store;
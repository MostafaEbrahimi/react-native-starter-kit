import auth from "./reducers/Auth";
import profile from "./reducers/Profile";
import course from "./reducers/Course";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootWatcher from "./saga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({ auth, profile, course });
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootWatcher);
export default store;

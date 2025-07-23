import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {persistReducer,persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import gameInfoReducer from "./reducers/gameInfoReducer";
import newsInfoReducer from "./reducers/newsInfoReducer";

const reducer=combineReducers({
    gameInfo:gameInfoReducer,
    newsInfo:newsInfoReducer,
})
const persistConfig={
    key:"root",
    storage,
    version:1,
    whitelist:["newsInfo"],
    blacklist:["gameInfo",""]
}

const persistedReducer=persistReducer(persistConfig,reducer)
export const store=createStore(persistedReducer,applyMiddleware(thunk,logger))
export const persistor=persistStore(store)


export default  reducer
//export default rootReducer
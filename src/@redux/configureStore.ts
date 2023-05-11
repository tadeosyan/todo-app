import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todoReducer from './todos/reducer';

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["todos"],
}

const rootReducer = combineReducers({
    todos: todoReducer
})

const persistReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
    const store = createStore(persistReducer, composeWithDevTools());
    const persitor = persistStore(store);

    return { store, persitor }
}

export default configureStore;
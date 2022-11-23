import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeMode from './reducers/themeMode';

const reducers = combineReducers({
    themeMode: themeMode
})

const store = configureStore({ reducer: reducers })

export default store;
import {createStore, combineReducers} from 'redux';
import {itemsReducer} from "./itemsReducer";
import {itemReducer} from "./itemReducer";

const rootReducer = combineReducers({
    items: itemsReducer,
    item: itemReducer
})

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>


import { configureStore } from "@reduxjs/toolkit";
import {postuer} from '../store/slice'
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
    key: "root",
    storage,
  };

  const combiner = combineReducers({ 
    postdata:postuer,
  
  })
  const persistor = persistReducer(persistConfig, combiner)
export const store=configureStore({
    reducer: persistor
});

 export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
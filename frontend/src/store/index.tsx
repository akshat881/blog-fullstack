import { configureStore } from "@reduxjs/toolkit";
import {postuer,postuser} from '../store/slice'
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
    key: "root",
    storage,
  };

  const combiner = combineReducers({ 
    postdata:postuer,
    postuser:postuser
  
  })
  const persistor = persistReducer(persistConfig, combiner)
export const store=configureStore({
    reducer: persistor,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

 export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
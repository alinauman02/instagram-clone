import { configureStore } from '@reduxjs/toolkit';
import { api } from 'apis';
import { authSliceReducer } from '.';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

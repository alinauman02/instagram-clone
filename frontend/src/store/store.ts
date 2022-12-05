import { configureStore } from '@reduxjs/toolkit';
import { emptyApi } from 'apis';
import { authSliceReducer } from '.';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    [emptyApi.reducerPath]: emptyApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(emptyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

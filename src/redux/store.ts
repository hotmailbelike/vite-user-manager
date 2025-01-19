import { configureStore } from '@reduxjs/toolkit';
import { usersApiSlice } from './features/users/usersApiSlice';

export const store = configureStore({
	reducer: {
		[usersApiSlice.reducerPath]: usersApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

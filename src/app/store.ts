import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import locationReducer from '../features/Location/locationSlice';
import roomReducer from '../features/Room/roomSlice';

export const store = configureStore({
	reducer: {
		location: locationReducer,
		room: roomReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

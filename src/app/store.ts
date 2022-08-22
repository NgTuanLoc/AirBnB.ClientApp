import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import locationReducer from '../features/Location/locationSlice';
import roomReducer from '../features/Room/roomSlice';
import bookReducer from '../features/Booking/bookingSlice';
import ratingReducer from '../features/Rating/ratingSlice';
import userReducer from '../features/User/userSlice';
import authReducer from '../features/Auth/authSlice';

export const store = configureStore({
	reducer: {
		location: locationReducer,
		room: roomReducer,
		book: bookReducer,
		rating: ratingReducer,
		user: userReducer,
		auth: authReducer,
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

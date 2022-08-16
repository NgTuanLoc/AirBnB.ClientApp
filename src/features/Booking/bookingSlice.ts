import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBooking } from '../../@types/Booking';
import {
	getBookingList,
	getBookingListByTicketId,
	updateBookingListByTicketId,
} from './bookingThunk';

export interface IBookingState {
	bookingList: IBooking[];
	isLoading: boolean;
	error: string;
	bookedRoom: IBooking | null;
}

const initialState: IBookingState = {
	bookingList: [],
	isLoading: false,
	error: '',
	bookedRoom: null,
};

const bookingSlice = createSlice({
	name: 'Booking',
	initialState,
	reducers: {
		bookingRoom: (state: IBookingState, action: PayloadAction<IBooking>) => {
			state.bookedRoom = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(getBookingList.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getBookingList.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.bookingList = payload;
		});
		builder.addCase(getBookingList.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
		builder.addCase(getBookingListByTicketId.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			getBookingListByTicketId.fulfilled,
			(state, { payload }) => {
				state.isLoading = false;
				state.bookedRoom = payload;
			}
		);
		builder.addCase(getBookingListByTicketId.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload as string;
		});
		builder.addCase(updateBookingListByTicketId.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(
			updateBookingListByTicketId.fulfilled,
			(state, { payload }) => {
				state.isLoading = false;
				state.bookedRoom = payload;
			}
		);
		builder.addCase(
			updateBookingListByTicketId.rejected,
			(state, { payload }) => {
				state.isLoading = false;
				state.error = payload as string;
			}
		);
	},
});

export const { bookingRoom } = bookingSlice.actions;

export default bookingSlice.reducer;

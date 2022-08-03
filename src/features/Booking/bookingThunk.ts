import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils/axios';
import { IBooking } from '../../@types/Booking';

const URL = '/api/tickets';

const getBookingList = createAsyncThunk<IBooking[]>(
	'booking/getBookingList',
	async (_, thunkAPI) => {
		try {
			const params = {
				method: 'GET',
				url: URL,
			};

			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const getBookingListByTicketId = createAsyncThunk<IBooking[], string>(
	'booking/getBookingListByTicketId',
	async (ticketId, thunkAPI) => {
		try {
			const params = {
				method: 'GET',
				url: `${URL}/${ticketId}`,
			};

			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

// const updateBookingListByTicketId = createAsyncThunk<IBooking[], string>(
// 	'booking/getBookingListByTicketId',
// 	async (ticketId, thunkAPI) => {
// 		try {
// 			const params = {
// 				method: 'PUT',
// 				url: `${URL}/${ticketId}`,
// 			};

// 			const response = await axiosInstance.request(params);
// 			return response.data;
// 		} catch (error: any) {
// 			return thunkAPI.rejectWithValue(error);
// 		}
// 	}
// );

export { getBookingList, getBookingListByTicketId };

import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils/axios';
import { IRoom } from '../../@types/Room';
import { RootState } from '../../app/store';

const URL = '/api/rooms';

const getRoomListByLocationID = createAsyncThunk<
	IRoom[],
	void,
	{
		state: RootState;
	}
>('room/getRoomListByLocationID', async (_, thunkAPI) => {
	const { room } = thunkAPI.getState();

	try {
		const params = {
			method: 'GET',
			url: `${URL}?locationId=${room.locationID}`,
		};

		const response = await axiosInstance.request(params);
		return response.data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error);
	}
});

const getRoomDetailByID = createAsyncThunk<
	IRoom,
	string,
	{
		state: RootState;
	}
>('room/getRoomDetailByID', async (roomID, thunkAPI) => {
	try {
		const params = {
			method: 'GET',
			url: `${URL}/${roomID}`,
		};

		const response = await axiosInstance.request(params);
		return response.data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error);
	}
});

const createNewRoom = createAsyncThunk<string, IRoom, { state: RootState }>(
	'room/createNewRoom',
	async (newRoom, thunkAPI) => {
		const adminToken = thunkAPI.getState().auth.auth?.token;

		if (!adminToken) {
			return thunkAPI.rejectWithValue('create room failed, admin required');
		}

		try {
			const params = {
				method: 'POST',
				url: `${URL}`,
				headers: {
					token: adminToken,
				},
				data: newRoom,
			};
			await axiosInstance.request(params);
			return 'success';
		} catch (error) {
			return thunkAPI.rejectWithValue('create room failed');
		}
	}
);

const bookRoomById = createAsyncThunk<
	string,
	{ roomId: string; checkIn: string; checkOut: string },
	{
		state: RootState;
	}
>('room/bookRoomById', async (bookInfo, thunkAPI) => {
	try {
		const userInfo = localStorage.getItem('userLogin');

		if (!userInfo) {
			return thunkAPI.rejectWithValue('You must login to book room');
		}

		const { token } = JSON.parse(userInfo);

		const params = {
			method: 'POST',
			url: `${URL}/booking`,
			headers: {
				token: token,
			},
			data: bookInfo,
		};

		await axiosInstance.request(params);
		return `Room ${bookInfo.roomId} booked successfully`;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error);
	}
});

export {
	getRoomListByLocationID,
	getRoomDetailByID,
	createNewRoom,
	bookRoomById,
};

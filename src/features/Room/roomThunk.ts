import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils/axios';
import { IRoom } from '../../@types/Room';
import { RootState } from '../../app/store';
import { UNAUTHENTICATED, UNAUTHORIZED } from '../../constant/Error';

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
		const { auth } = thunkAPI.getState().auth;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const {
			user: { type: userType },
			token,
		} = auth;

		if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);

		try {
			const params = {
				method: 'POST',
				url: `${URL}`,
				headers: {
					token,
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
		const { auth } = thunkAPI.getState().auth;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const {
			user: { type: userType },
			token,
		} = auth;

		if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);

		const params = {
			method: 'POST',
			url: `${URL}/booking`,
			headers: {
				token,
			},
			data: bookInfo,
		};

		await axiosInstance.request(params);
		return `Room ${bookInfo.roomId} booked successfully`;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error);
	}
});

const updateRoomById = createAsyncThunk<
	string,
	IRoom,
	{
		state: RootState;
	}
>('room/updateRoomById', async (roomDetail, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const {
			user: { type: userType },
			token,
		} = auth;

		if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);

		const {
			name,
			guests,
			bedRoom,
			bath,
			description,
			price,
			elevator,
			hotTub,
			pool,
			indoorFireplace,
			dryer,
			gym,
			kitchen,
			wifi,
			heating,
			cableTV,
			locationId,
			_id,
		} = roomDetail;

		const params = {
			method: 'PUT',
			url: `${URL}/${_id}`,
			headers: {
				token,
			},
			data: {
				name,
				guests,
				bedRoom,
				bath,
				description,
				price,
				elevator,
				hotTub,
				pool,
				indoorFireplace,
				dryer,
				gym,
				kitchen,
				wifi,
				heating,
				cableTV,
				locationId,
			},
		};

		await axiosInstance.request(params);
		return 'success update room';
	} catch (error) {
		return thunkAPI.rejectWithValue('Update Room failed');
	}
});

const deleteRoomById = createAsyncThunk<
	string,
	string,
	{
		state: RootState;
	}
>('room/deleteRoomById', async (roomId, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const {
			user: { type: userType },
			token,
		} = auth;

		if (userType !== 'ADMIN') return thunkAPI.rejectWithValue(UNAUTHORIZED);

		const params = {
			method: 'DELETE',
			url: `${URL}/${roomId}`,
			headers: {
				token,
			},
		};

		await axiosInstance.request(params);

		return 'success delete room';
	} catch (error) {
		return thunkAPI.rejectWithValue('Delete Room failed');
	}
});

export {
	getRoomListByLocationID,
	getRoomDetailByID,
	createNewRoom,
	bookRoomById,
	updateRoomById,
	deleteRoomById,
};

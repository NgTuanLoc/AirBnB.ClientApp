import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils';
import { IRoom } from '../../@types/Room';
import { RootState } from '../../app/store';
import { UNAUTHENTICATED, UNAUTHORIZED } from '../../constant/Error';

const URL = '/api/v1/room';

const getAllRoom = createAsyncThunk<
	IRoom[],
	void,
	{
		state: RootState;
	}
>('room/getAllRoom', async (_, thunkAPI) => {
	try {
		const params = {
			method: 'GET',
			url: `${URL}`,
		};

		const response = await axiosInstance.request(params);
		return response.data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error);
	}
});

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

		const { roleList } = auth;

		if (roleList.includes('Admin'))
			return thunkAPI.rejectWithValue(UNAUTHORIZED);

		try {
			const params = {
				method: 'POST',
				url: `${URL}`,
				data: newRoom,
			};
			await axiosInstance.request(params);

			thunkAPI.dispatch(getAllRoom());
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

		const params = {
			method: 'POST',
			url: `${URL}/booking`,
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

		const { roleList } = auth;

		if (roleList.includes('Admin'))
			return thunkAPI.rejectWithValue(UNAUTHORIZED);
		console.log(roomDetail);

		// const {
		// 	name,
		// 	guests,
		// 	bedRoom,
		// 	bath,
		// 	description,
		// 	price,
		// 	elevator,
		// 	hotTub,
		// 	pool,
		// 	indoorFireplace,
		// 	dryer,
		// 	gym,
		// 	kitchen,
		// 	wifi,
		// 	heating,
		// 	cableTV,
		// 	locationId,
		// 	id,
		// } = roomDetail;

		// const params = {
		// 	method: 'PUT',
		// 	url: `${URL}/${id}`,
		// 	headers: {
		// 		token,
		// 	},
		// 	data: {
		// 		name,
		// 		guests,
		// 		bedRoom,
		// 		bath,
		// 		description,
		// 		price,
		// 		elevator,
		// 		hotTub,
		// 		pool,
		// 		indoorFireplace,
		// 		dryer,
		// 		gym,
		// 		kitchen,
		// 		wifi,
		// 		heating,
		// 		cableTV,
		// 		locationId,
		// 	},
		// };

		// await axiosInstance.request(params);
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

		const { roleList } = auth;

		if (roleList.includes('Admin'))
			return thunkAPI.rejectWithValue(UNAUTHORIZED);

		const params = {
			method: 'DELETE',
			url: `${URL}/${roomId}`,
		};

		await axiosInstance.request(params);

		return 'success delete room';
	} catch (error) {
		return thunkAPI.rejectWithValue('Delete Room failed');
	}
});

const uploadRoomImageById = createAsyncThunk<
	string,
	{ id: string; image: FormData },
	{
		state: RootState;
	}
>('room/uploadRoomImageById', async (room, thunkAPI) => {
	try {
		const { auth } = thunkAPI.getState().auth;
		const { id, image } = room;

		if (!auth) return thunkAPI.rejectWithValue(UNAUTHENTICATED);

		const { roleList } = auth;

		if (roleList.includes('Admin'))
			return thunkAPI.rejectWithValue(UNAUTHORIZED);

		const params = {
			method: 'POST',
			url: `${URL}/upload-image/${id}`,
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			data: image,
		};

		await axiosInstance.request(params);

		return 'Upload Room Image Successful';
	} catch (error) {
		return thunkAPI.rejectWithValue('Upload Room Image failed');
	}
});

export {
	getAllRoom,
	getRoomListByLocationID,
	getRoomDetailByID,
	createNewRoom,
	bookRoomById,
	updateRoomById,
	deleteRoomById,
	uploadRoomImageById,
};

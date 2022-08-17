import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils/axios';
import { RootState } from '../../app/store';
// ROOM - LOCATION - USER
export interface IUpdateRoom {
	roomId: string;
	data: {
		name: string;
		guests: number;
		bedRoom: number;
		bath: number;
		description: string;
		price: number;
		elevator: boolean;
		hotTub: boolean;
		pool: boolean;
		indoorFireplace: boolean;
		dryer: boolean;
		gym: boolean;
		kitchen: boolean;
		wifi: boolean;
		heating: boolean;
		cableTV: boolean;
		locationId: string;
	};
}

const updateRoomById = createAsyncThunk<
	string,
	IUpdateRoom,
	{
		state: RootState;
	}
>('room/updateRoomById', async (roomInfo, thunkAPI) => {
	try {
		const userInfo = localStorage.getItem('userLogin');

		if (!userInfo) {
			return thunkAPI.rejectWithValue('You must login to book room');
		}
		const { token } = JSON.parse(userInfo);
		if (thunkAPI.getState().auth.auth?.user.type !== 'ADMIN') {
			return thunkAPI.rejectWithValue('You are not authorized for this action');
		}

		const { roomId, data } = roomInfo;
		const params = {
			method: 'PUT',
			url: `/api/rooms/${roomId}`,
			headers: { token: token },
			data: data,
		};

		await axiosInstance.request(params);
		const successMessage = `update room ${roomId} successful`;
		return successMessage;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const deleteRoomById = createAsyncThunk<
	void,
	string,
	{
		state: RootState;
	}
>('room/updateRoomById', async (roomId, thunkAPI) => {
	try {
		const userInfo = localStorage.getItem('userLogin');

		if (!userInfo) {
			return thunkAPI.rejectWithValue('You must login to book room');
		}
		const { token } = JSON.parse(userInfo);

		const params = {
			method: 'DELETE',
			url: `/api/rooms/${roomId}`,
			headers: { token: token },
		};

		await axiosInstance.request(params);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export { updateRoomById, deleteRoomById };

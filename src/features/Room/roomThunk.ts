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

export { getRoomListByLocationID };

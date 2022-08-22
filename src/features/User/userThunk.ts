import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils/axios';
import { RootState } from '../../app/store';
import { IUser } from '../../@types/User';

const URL = '/api/users';

// GetAll - GetById - Create - Delete - Update - Upload Image
const getAllUsers = createAsyncThunk<IUser[], void, { state: RootState }>(
	'user/getAllUsers',
	async (_, thunkAPI) => {
		try {
			const { userType, isAuthenticated } = thunkAPI.getState().auth;

			if (userType !== 'ADMIN') {
				return thunkAPI.rejectWithValue('fail to get All User, Admin required');
			}

			if (!isAuthenticated) {
				return thunkAPI.rejectWithValue('fail to get All User, Login required');
			}

			const params = {
				method: 'GET',
				url: `${URL}`,
			};
			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const getAllUsersPagination = createAsyncThunk<
	IUser[],
	{
		limit: number;
		skip: number;
	},
	{ state: RootState }
>('user/getAllUsersPagination', async ({ limit = 0, skip = 10 }, thunkAPI) => {
	try {
		const { userType, isAuthenticated } = thunkAPI.getState().auth;

		if (userType !== 'ADMIN') {
			return thunkAPI.rejectWithValue('fail to get All User, Admin required');
		}

		if (!isAuthenticated) {
			return thunkAPI.rejectWithValue('fail to get All User, Login required');
		}

		const params = {
			method: 'GET',
			url: `${URL}/pagination?skip=${skip}&limit=${limit}`,
		};
		const response = await axiosInstance.request(params);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const createUser = createAsyncThunk<IUser[], void, { state: RootState }>(
	'user/createUser',
	async (_, thunkAPI) => {
		try {
			const { userType, isAuthenticated } = thunkAPI.getState().auth;

			if (userType !== 'ADMIN') {
				return thunkAPI.rejectWithValue('fail to get All User, Admin required');
			}

			if (!isAuthenticated) {
				return thunkAPI.rejectWithValue('fail to get All User, Login required');
			}

			const params = {
				method: 'GET',
				url: `${URL}`,
			};
			const response = await axiosInstance.request(params);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export { getAllUsers, createUser, getAllUsersPagination };

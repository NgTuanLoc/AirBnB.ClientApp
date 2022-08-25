import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils/axios';
import { RootState } from '../../app/store';
import { IUser } from '../../@types/User';
import { IRegister } from '../../@types/Auth';

const URL = '/api/users';

// GetAll - GetById - Create - Delete - Update - Upload Image
const getAllUsers = createAsyncThunk<IUser[], void, { state: RootState }>(
	'user/getAllUsers',
	async (_, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth;

			const params = {
				method: 'GET',
				url: `${URL}`,
				headers: {
					token: token,
				},
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
		const { token } = thunkAPI.getState().auth;

		const params = {
			method: 'GET',
			url: `${URL}/pagination?skip=${skip}&limit=${limit}`,
			headers: {
				token: token,
			},
		};
		const response = await axiosInstance.request(params);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const createUser = createAsyncThunk<string, IRegister, { state: RootState }>(
	'user/createUser',
	async (user, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth;

			const params = {
				method: 'POST',
				url: `${URL}`,
				headers: {
					token: token,
				},
				data: {
					name: user.name,
					email: user.email,
					password: user.password,
					phone: user.phone,
					birthday: user.birthday,
					gender: user.gender,
					address: user.address,
					type: user.type,
				},
			};

			await axiosInstance.request(params);
			return `Create new ${user.type} successfully`;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const deleteUserById = createAsyncThunk<string, string, { state: RootState }>(
	'user/deleteUserById',
	async (userId, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth;

			const params = {
				method: 'DELETE',
				url: `${URL}/${userId}`,
				headers: {
					token: token,
				},
			};

			await axiosInstance.request(params);
			return `Delete user ${userId} successfully`;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const updateUserById = createAsyncThunk<string, string, { state: RootState }>(
	'user/updateUserById',
	async (userId, thunkAPI) => {
		try {
			const { token } = thunkAPI.getState().auth;

			const params = {
				method: 'DELETE',
				url: `${URL}/${userId}`,
				headers: {
					token: token,
				},
			};

			await axiosInstance.request(params);
			return `Delete user ${userId} successfully`;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export {
	getAllUsers,
	createUser,
	getAllUsersPagination,
	deleteUserById,
	updateUserById,
};

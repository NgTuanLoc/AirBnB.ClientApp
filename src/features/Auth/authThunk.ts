import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../utils';

const URL = '/api/v1/auth';

const loginThunk = createAsyncThunk<IAuth, { email: string; password: string }>(
	'auth/login',
	async (user, thunkAPI) => {
		try {
			const params = {
				method: 'POST',
				url: `${URL}/login`,
				data: {
					email: user.email,
					password: user.password,
				},
			};
			const response = await axiosInstance.request(params);

			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(`${error.response.status}`);
		}
	}
);

const getUserThunk = createAsyncThunk<IAuth>(
	'auth/getUser',
	async (_, thunkAPI) => {
		try {
			const params = {
				method: 'GET',
				url: `/api/v1/user/get-user`,
			};
			const response = await axiosInstance.request(params);

			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue(`${error.response.status}`);
		}
	}
);

const registerThunk = createAsyncThunk<IAuth, IRegister>(
	'auth/register',
	async (user, thunkAPI) => {
		try {
			const params = {
				method: 'POST',
				url: `${URL}/register`,
				data: {
					personName: user.personName,
					email: user.email,
					password: user.password,
					confirmPassword: user.confirmPassword,
					phone: user.phone,
					address: user.address,
					// birthday: user.birthday,
					// gender: user.gender === 'Man' ? true : false,
				},
			};

			const response = await axiosInstance.request(params);
			thunkAPI.dispatch(
				loginThunk({
					email: user.email,
					password: user.password,
				})
			);
			return response.data;
		} catch (error: any) {
			return thunkAPI.rejectWithValue('REGISTER FAILED');
		}
	}
);

export { loginThunk, registerThunk, getUserThunk };

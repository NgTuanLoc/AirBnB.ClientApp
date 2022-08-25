import { IUser } from './User';

export interface IAuth {
	message: string;
	user: IUser;
	token: string;
}

export interface IRegister {
	name: string;
	email: string;
	password: string;
	phone: string;
	birthday: string;
	gender: boolean;
	address: string;
	type?: 'ADMIN' | 'CLIENT';
}

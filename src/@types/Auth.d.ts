// import { IUser } from './User';

interface IAuth {
	id: string;
	email: string;
	personName: string;
	address: string;
	profileImage: string;
	description: string;
	isMarried?: boolean;
	phoneNumber: string;
	roleList: RoleType[];
}

interface IRegister {
	personName: string;
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
	address: string;
}

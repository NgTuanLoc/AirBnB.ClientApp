export interface IAuth {
	message: string;
	user: {
		tickets: string[];
		deleteAt: boolean;
		_id: string;
		name: string;
		email: string;
		password: string;
		phone: string;
		birthday: string;
		gender: boolean;
		address: string;
		type: 'ADMIN' | 'USER';
		__v: number;
	};
	token: string;
}

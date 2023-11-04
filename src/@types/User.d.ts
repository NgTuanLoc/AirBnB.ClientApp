interface IUser {
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

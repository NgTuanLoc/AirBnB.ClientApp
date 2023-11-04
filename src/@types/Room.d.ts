import { ILocation } from './Location';

interface IRoom extends IBaseModel {
	name: string;
	homeType: string;
	roomType: string;
	totalOccupancy: number;
	totalBedrooms: number;
	totalBathrooms: number;
	summary: string;
	address: string;
	hasTV: boolean;
	hasKitchen: boolean;
	hasAirCon: boolean;
	hasHeating: boolean;
	hasInternet: boolean;
	price: number;
	publishedAt?: Date;
	owner?: IUser;
	latitude: number;
	longitude: number;
	location: ILocation;
	imageList: IImage[];
}

export { IRoom };

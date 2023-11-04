interface IImage extends IBaseModel {
	title: string;
	description: string;
	lowQualityUrl: string;
	mediumQualityUrl: string;
	highQualityUrl: string;
	roomId?: string;
}

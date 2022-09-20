import { Helmet } from 'react-helmet';

interface IMeta {
	title?: string;
	description?: string;
	keywords?: string;
}

const Meta = ({ title, description, keywords }: IMeta) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: 'Vacation Homes & Condo Rentals - Airbnb',
	description: 'Vacation Homes & Condo Rentals',
	keywords: 'NgTuanLoc',
};

export default Meta;

import { ReactNode } from 'react';

import { Image } from '../../components';
import {
	StyledContainer,
	StyledFormContainer,
	StyledImageContainer,
} from './style';

interface IMainLayout {
	children?: ReactNode;
	image: {
		imageUrl: string;
		imageAlt: string;
	};
}

const MainLayout = ({ children, image }: IMainLayout) => {
	const { imageUrl, imageAlt } = image;

	return (
		<StyledContainer>
			<StyledFormContainer>{children}</StyledFormContainer>
			<StyledImageContainer>
				<Image borderRadius='0' url={imageUrl} alt={imageAlt} />
			</StyledImageContainer>
		</StyledContainer>
	);
};

export default MainLayout;

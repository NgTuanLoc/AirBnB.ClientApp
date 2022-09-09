import Skeleton from 'react-loading-skeleton';

import { useProgressiveImg } from '../../hooks/useProgressiveImg';
import { DEFAULT_IMAGE } from '../../constant';
import { StyledContainer, StyledImage } from './style';

interface IImage {
	url: string;
	alt: string;
	gridArea?: string;
	borderRadius?: string;
}

const CustomImage = ({ url, alt, gridArea, borderRadius }: IImage) => {
	const isImageLoaded = useProgressiveImg(url);

	if (!url) {
		return <img alt={alt} src={DEFAULT_IMAGE} />;
	}

	return (
		<StyledContainer>
			{isImageLoaded ? (
				<StyledImage src={url} alt={alt} />
			) : (
				<Skeleton
					height={`100%`}
					baseColor='#d9d7d9'
					highlightColor='#f5f5f5'
					borderRadius='0.5rem'
					duration={2}
				/>
			)}
		</StyledContainer>
	);
};

export default CustomImage;

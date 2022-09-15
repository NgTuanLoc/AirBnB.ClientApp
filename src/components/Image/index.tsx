import Skeleton from 'react-loading-skeleton';

import { useProgressiveImg } from '../../hooks';
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
		<StyledContainer gridArea={gridArea}>
			{isImageLoaded ? (
				<StyledImage src={url} alt={alt} borderRadius={borderRadius} />
			) : (
				<Skeleton
					height={`100%`}
					baseColor='#d9d7d9'
					highlightColor='#f5f5f5'
					borderRadius={borderRadius}
					duration={2}
				/>
			)}
		</StyledContainer>
	);
};

export default CustomImage;

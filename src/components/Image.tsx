import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import { useProgressiveImg } from '../hooks/useProgressiveImg';

interface IImage {
	url: string;
	alt: string;
}

const CustomImage = ({ url, alt }: IImage) => {
	const isImageLoaded = useProgressiveImg(url);

	return (
		<Container>
			{isImageLoaded ? (
				<img src={url} alt={alt} />
			) : (
				<Skeleton
					height={`100%`}
					baseColor='#d9d7d9'
					highlightColor='#f5f5f5'
					borderRadius='0.5rem'
					duration={2}
				/>
			)}
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export default CustomImage;

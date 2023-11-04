import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import Skeleton from 'react-loading-skeleton';

import {
	StyledContainer,
	StyledSwiperItem,
	StyledImageContainer,
	StyledHeading,
} from './style';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectLocation } from '../../features/Room/roomSlice';
import { Image } from '..';

const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Categories = () => {
	const { locationList, isLoading } = useAppSelector((store) => store.location);
	const dispatch = useAppDispatch();
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	const isDesktopDevice = useMediaQuery({
		query: '(min-width: 1200px)',
	});

	if (isLoading) {
		return (
			<StyledContainer
				spaceBetween={isDesktopDevice ? 10 : isMobileDevice ? 3 : 5}
				slidesPerView={isDesktopDevice ? 7 : isMobileDevice ? 2 : 5}
				navigation={true}
				modules={[Navigation]}>
				{skeletonArray.map((item) => {
					return (
						<SwiperSlide key={item}>
							<StyledSwiperItem>
								<StyledImageContainer>
									<Skeleton />
								</StyledImageContainer>
								<StyledHeading>
									<Skeleton />
								</StyledHeading>
							</StyledSwiperItem>
						</SwiperSlide>
					);
				})}
			</StyledContainer>
		);
	}

	return (
		<StyledContainer
			spaceBetween={isMobileDevice ? 5 : 15}
			slidesPerView={isMobileDevice ? 2 : 5}
			navigation={true}
			modules={[Navigation]}>
			{locationList.map((location) => {
				const { id, image, province } = location;
				return (
					<SwiperSlide key={id} onClick={() => dispatch(selectLocation(id))}>
						<StyledSwiperItem>
							<StyledImageContainer>
								<Image
									borderRadius='1rem 1rem 0 0'
									url={image}
									alt={province}
								/>
							</StyledImageContainer>
							<StyledHeading>{province}</StyledHeading>
						</StyledSwiperItem>
					</SwiperSlide>
				);
			})}
		</StyledContainer>
	);
};

export default Categories;

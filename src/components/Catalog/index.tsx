// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper';
import { StyledContainer } from './style';
import { Image } from '../';

interface ICatalog {
	images: string[];
	borderRadius?: string;
	navigation?: boolean;
}

const Catalog = ({ images, borderRadius, navigation }: ICatalog) => {
	return (
		<StyledContainer>
			<Swiper
				style={{ height: '100%' }}
				loop={true}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				navigation={navigation ? navigation : false}
				modules={[Pagination, Navigation]}>
				{images.map((image, id) => (
					<SwiperSlide key={id} style={{ position: 'relative' }}>
						<Image
							borderRadius={borderRadius}
							url={image}
							alt={`house ${id}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</StyledContainer>
	);
};

export default Catalog;

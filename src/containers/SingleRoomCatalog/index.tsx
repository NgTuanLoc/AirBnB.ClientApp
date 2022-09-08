import { useMediaQuery } from 'react-responsive';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';

import { DUMMY_IMAGE_DATA } from '../../constant';
import { useAppSelector } from '../../hooks/hooks';
import { Catalog, Loading } from '../../components';
import {
	StyledLocationTitle,
	StyledContainer,
	StyledLinkContainer,
	StyledHeading,
	StyledSubTitle,
	StyledSubTitleLink,
	StyledSubTitleLinkSpan,
	StyledPhotoContainer,
	StyledMainImage,
	StyledImage1,
	StyledImage2,
	StyledImage3,
	StyledImage4,
} from './style';

const SingleRoomCatalog = () => {
	const { selectedRoom } = useAppSelector((store) => store.room);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	if (!selectedRoom) return <Loading />;

	const { name, locationId, image } = selectedRoom;

	return (
		<StyledContainer>
			<StyledLocationTitle className='location-name'>
				{name}, {locationId ? locationId.name : 'not provided'},{' '}
				{locationId ? locationId.province : 'not provided'}
			</StyledLocationTitle>
			<StyledLinkContainer>
				<StyledHeading>
					{locationId ? locationId.province : 'not provided'}
				</StyledHeading>
				<StyledSubTitle>
					<StyledSubTitleLink href='https://github.com/NgTuanLoc'>
						<FiShare /> <StyledSubTitleLinkSpan>share</StyledSubTitleLinkSpan>
					</StyledSubTitleLink>
					<StyledSubTitleLink
						className='flex-center'
						href='https://github.com/NgTuanLoc'>
						<AiOutlineHeart />{' '}
						<StyledSubTitleLinkSpan>save</StyledSubTitleLinkSpan>
					</StyledSubTitleLink>
				</StyledSubTitle>
			</StyledLinkContainer>
			{isMobileDevice ? (
				<Catalog images={[...DUMMY_IMAGE_DATA, image]} />
			) : (
				<StyledPhotoContainer>
					<StyledMainImage url={image} alt={name} />
					<StyledImage1 url={DUMMY_IMAGE_DATA[0]} alt={name} />
					<StyledImage2 url={DUMMY_IMAGE_DATA[1]} alt={name} />
					<StyledImage3 url={DUMMY_IMAGE_DATA[2]} alt={name} />
					<StyledImage4 url={DUMMY_IMAGE_DATA[3]} alt={name} />
				</StyledPhotoContainer>
			)}
		</StyledContainer>
	);
};

export default SingleRoomCatalog;

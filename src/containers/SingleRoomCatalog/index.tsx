import { useMediaQuery } from 'react-responsive';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoShareOutline } from 'react-icons/io5';

import { DUMMY_IMAGE_DATA } from '../../constant';
import { useAppSelector } from '../../hooks';
import { Catalog, Line, Loading } from '../../components';
import {
	StyledNavbar,
	StyledLocationTitle,
	StyledContainer,
	StyledLinkContainer,
	StyledTitleContainer,
	StyledHeading,
	StyledSubTitle,
	StyledSubTitleLink,
	StyledSubTitleLinkSpan,
	StyledPhotoContainer,
	StyledImage,
	StyledButton,
	StyledBackHomeButton,
	StyledDivWrapper,
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
			{isMobileDevice && (
				<StyledNavbar>
					<StyledBackHomeButton to='/'>
						<IoIosArrowBack />
						Homes
					</StyledBackHomeButton>
					<StyledDivWrapper>
						<StyledButton>
							<IoShareOutline />
						</StyledButton>
						<StyledButton>
							<AiOutlineHeart />
						</StyledButton>
					</StyledDivWrapper>
				</StyledNavbar>
			)}
			{!isMobileDevice && (
				<StyledTitleContainer>
					<StyledLocationTitle>
						{name}, {locationId ? locationId.name : 'not provided'},{' '}
						{locationId ? locationId.province : 'not provided'}
					</StyledLocationTitle>
					<StyledLinkContainer>
						<StyledHeading>
							{locationId ? locationId.province : 'not provided'}
						</StyledHeading>
						<StyledSubTitle>
							<StyledSubTitleLink href='https://github.com/NgTuanLoc'>
								<FiShare />{' '}
								<StyledSubTitleLinkSpan>share</StyledSubTitleLinkSpan>
							</StyledSubTitleLink>
							<StyledSubTitleLink
								className='flex-center'
								href='https://github.com/NgTuanLoc'>
								<AiOutlineHeart />{' '}
								<StyledSubTitleLinkSpan>save</StyledSubTitleLinkSpan>
							</StyledSubTitleLink>
						</StyledSubTitle>
					</StyledLinkContainer>
				</StyledTitleContainer>
			)}

			{isMobileDevice ? (
				<Catalog images={[...DUMMY_IMAGE_DATA, image]} />
			) : (
				<StyledPhotoContainer>
					<StyledImage gridArea='main' url={image} alt={name} />
					<StyledImage
						gridArea='image-1'
						url={DUMMY_IMAGE_DATA[0]}
						alt={name}
					/>
					<StyledImage
						gridArea='image-2'
						url={DUMMY_IMAGE_DATA[1]}
						alt={name}
					/>
					<StyledImage
						gridArea='image-3'
						url={DUMMY_IMAGE_DATA[2]}
						alt={name}
					/>
					<StyledImage
						gridArea='image-4'
						url={DUMMY_IMAGE_DATA[3]}
						alt={name}
					/>
				</StyledPhotoContainer>
			)}
			{isMobileDevice && (
				<StyledTitleContainer>
					<StyledLocationTitle>
						{name}, {locationId ? locationId.name : 'not provided'},{' '}
						{locationId ? locationId.province : 'not provided'}
					</StyledLocationTitle>
					<StyledLinkContainer>
						<StyledHeading>
							{locationId ? locationId.province : 'not provided'}
						</StyledHeading>
						<StyledSubTitle>
							<StyledSubTitleLink href='https://github.com/NgTuanLoc'>
								<FiShare />{' '}
								<StyledSubTitleLinkSpan>share</StyledSubTitleLinkSpan>
							</StyledSubTitleLink>
							<StyledSubTitleLink
								className='flex-center'
								href='https://github.com/NgTuanLoc'>
								<AiOutlineHeart />{' '}
								<StyledSubTitleLinkSpan>save</StyledSubTitleLinkSpan>
							</StyledSubTitleLink>
						</StyledSubTitle>
					</StyledLinkContainer>
					<Line />
				</StyledTitleContainer>
			)}
		</StyledContainer>
	);
};

export default SingleRoomCatalog;

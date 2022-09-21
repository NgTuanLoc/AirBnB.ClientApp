import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoShareOutline } from 'react-icons/io5';

import { DUMMY_IMAGE_DATA } from '../../constant';
import { useAppSelector } from '../../hooks';
import { Catalog, Line } from '../../components';
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
	StyledSkeletonLoadingWrapper,
} from './style';

const SingleRoomCatalog = () => {
	const { selectedRoom, isLoading } = useAppSelector((store) => store.room);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

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
						{isLoading ? (
							<Skeleton width='60%' />
						) : (
							`${name}${locationId.name ? `, ${locationId.name}` : ''}${
								locationId.province ? `, ${locationId.province}` : ''
							}`
						)}
					</StyledLocationTitle>
					<StyledLinkContainer>
						<StyledHeading isLoading={isLoading}>
							{isLoading ? (
								<Skeleton width='30rem' />
							) : (
								`${name}${locationId.country ? `, ${locationId.country}` : ''}${
									locationId.province ? `, ${locationId.province}` : ''
								}`
							)}
						</StyledHeading>
						{!isLoading && (
							<StyledSubTitle>
								<StyledSubTitleLink href='https://github.com/NgTuanLoc'>
									<FiShare />{' '}
									<StyledSubTitleLinkSpan>Share</StyledSubTitleLinkSpan>
								</StyledSubTitleLink>
								<StyledSubTitleLink href='https://github.com/NgTuanLoc'>
									<AiOutlineHeart />{' '}
									<StyledSubTitleLinkSpan>Save</StyledSubTitleLinkSpan>
								</StyledSubTitleLink>
							</StyledSubTitle>
						)}
					</StyledLinkContainer>
				</StyledTitleContainer>
			)}

			{isMobileDevice ? (
				<Catalog borderRadius='0' images={[image, ...DUMMY_IMAGE_DATA]} />
			) : (
				<StyledPhotoContainer>
					<StyledSkeletonLoadingWrapper gridArea='main'>
						{isLoading ? (
							<Skeleton borderRadius='var(--radius) 0 0 var(--radius)' />
						) : (
							<StyledImage
								borderRadius='var(--radius) 0 0 var(--radius)'
								url={image}
								alt={name}
							/>
						)}
					</StyledSkeletonLoadingWrapper>
					<StyledSkeletonLoadingWrapper gridArea='image-1'>
						{isLoading ? (
							<Skeleton borderRadius='0' />
						) : (
							<StyledImage
								borderRadius='0'
								url={DUMMY_IMAGE_DATA[0]}
								alt={name}
							/>
						)}
					</StyledSkeletonLoadingWrapper>
					<StyledSkeletonLoadingWrapper gridArea='image-2'>
						{isLoading ? (
							<Skeleton borderRadius='0 var(--radius) 0 0' />
						) : (
							<StyledImage
								borderRadius='0 var(--radius) 0 0'
								url={DUMMY_IMAGE_DATA[1]}
								alt={name}
							/>
						)}
					</StyledSkeletonLoadingWrapper>
					<StyledSkeletonLoadingWrapper gridArea='image-3'>
						{isLoading ? (
							<Skeleton borderRadius='0' />
						) : (
							<StyledImage
								borderRadius='0'
								url={DUMMY_IMAGE_DATA[2]}
								alt={name}
							/>
						)}
					</StyledSkeletonLoadingWrapper>
					<StyledSkeletonLoadingWrapper gridArea='image-4'>
						{isLoading ? (
							<Skeleton borderRadius='var(--radius) 0 var(--radius) 0' />
						) : (
							<StyledImage
								borderRadius='var(--radius) 0 var(--radius) 0'
								url={DUMMY_IMAGE_DATA[3]}
								alt={name}
							/>
						)}
					</StyledSkeletonLoadingWrapper>
				</StyledPhotoContainer>
			)}
			{isMobileDevice && (
				<StyledTitleContainer>
					<StyledLocationTitle>
						{name}, {locationId ? locationId?.name : ''},{' '}
						{locationId ? locationId?.province : ''}
					</StyledLocationTitle>
					<StyledLinkContainer>
						<StyledHeading>
							{locationId ? locationId.province : ''}
						</StyledHeading>
						<StyledSubTitle>
							<StyledSubTitleLink href='https://github.com/NgTuanLoc'>
								<FiShare />{' '}
								<StyledSubTitleLinkSpan>Share</StyledSubTitleLinkSpan>
							</StyledSubTitleLink>
							<StyledSubTitleLink
								className='flex-center'
								href='https://github.com/NgTuanLoc'>
								<AiOutlineHeart />{' '}
								<StyledSubTitleLinkSpan>Save</StyledSubTitleLinkSpan>
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

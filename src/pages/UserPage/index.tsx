import { Navigate } from 'react-router-dom';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { TiTickOutline } from 'react-icons/ti';

import defaultImage from '../../images/default-user-image.jpg';
import { useAppSelector } from '../../hooks';
import { transformDate } from '../../utils';
import { MainLayout } from '../../layouts';
import {
	StyledContainer,
	StyledImageContainer,
	StyledUserInfoContainer,
	StyledUserDetailContainer,
	StyledDivWrapper,
	StyledButton,
	StyledHeading,
	StyledLargeHeading,
	StyledListContainer,
	StyledParagraph,
	StyledListItem,
} from './style';
import { Line } from '../../components';

const UserPage = () => {
	const { auth } = useAppSelector((store) => store.auth);

	if (!auth) {
		return <Navigate to='/login' />;
	}

	const {
		tickets,
		email,
		name,
		phone,
		birthday,
		gender,
		address,
		type,
		avatar,
	} = auth?.user;
	return (
		<MainLayout hideSearchBar>
			<StyledContainer>
				<StyledUserInfoContainer>
					<StyledImageContainer
						src={avatar ? avatar : defaultImage}
						alt={name}
					/>
					<StyledHeading>Upload user image</StyledHeading>
					<StyledUserDetailContainer>
						<StyledHeading>
							<MdOutlineVerifiedUser className='icon' /> verified your account
						</StyledHeading>
						<StyledParagraph>
							Verified your account to get authorization badge
						</StyledParagraph>
						<StyledButton>Get Badge</StyledButton>
					</StyledUserDetailContainer>
					<Line />
					<StyledDivWrapper>
						<StyledHeading>
							<TiTickOutline className='icon' /> {name} verified
						</StyledHeading>
					</StyledDivWrapper>
				</StyledUserInfoContainer>
				<StyledDivWrapper>
					<StyledLargeHeading>Hello, my name is {name}</StyledLargeHeading>
					<StyledParagraph>Join in 2021</StyledParagraph>
					<Line />
					<StyledListContainer>
						<StyledListItem>Email: {email}</StyledListItem>
						<StyledListItem>Phone: {phone}</StyledListItem>
						<StyledListItem>
							Birthday: {transformDate(new Date(birthday))}
						</StyledListItem>
						<StyledListItem>
							Gender: {gender ? 'male' : 'female'}
						</StyledListItem>
						<StyledListItem>Address: {address}</StyledListItem>
						<StyledListItem>Type: {type}</StyledListItem>
						<StyledListItem>
							tickets: {tickets?.length === 0 ? 'null' : tickets?.join(', ')}
						</StyledListItem>
					</StyledListContainer>
				</StyledDivWrapper>
			</StyledContainer>
		</MainLayout>
	);
};

export default UserPage;

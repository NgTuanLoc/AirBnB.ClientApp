import { Image } from '../../components';
import { MainLayout } from '../../layouts';
import {
	StyledContainer,
	StyledImageContainer,
	StyledInfoContainer,
	StyledLinkContainer,
	StyledLargerHeading,
	StyledLargeHeading,
	StyledBackToHomeButton,
	StyledParagraph,
	StyledLink,
	StyledDivWrapper,
} from './style';

interface INotFound {
	error: string;
}

const NotFound = ({ error }: INotFound) => {
	return (
		<MainLayout padding='0 10rem'>
			<StyledContainer>
				<StyledInfoContainer>
					<StyledLargerHeading>Oops!</StyledLargerHeading>
					<StyledLargeHeading>{error}</StyledLargeHeading>
					<StyledLargeHeading>Error code: 404</StyledLargeHeading>
					<StyledParagraph>
						Here are some helpful links instead :
					</StyledParagraph>
					<StyledLinkContainer>
						<StyledBackToHomeButton to='/'>Home</StyledBackToHomeButton>
						<StyledLink href='https://github.com/NgTuanLoc'>Search</StyledLink>
						<StyledLink href='https://github.com/NgTuanLoc'>Help</StyledLink>
						<StyledLink href='https://github.com/NgTuanLoc'>
							Traveling on Airbnb
						</StyledLink>
						<StyledLink href='https://github.com/NgTuanLoc'>
							Hosting on Airbnb
						</StyledLink>
						<StyledLink href='https://github.com/NgTuanLoc'>
							Trust & Safety
						</StyledLink>
					</StyledLinkContainer>
				</StyledInfoContainer>
				<StyledDivWrapper>
					<StyledImageContainer>
						<Image
							url='https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif'
							alt='Girl has dropped her ice cream.'
						/>
					</StyledImageContainer>
				</StyledDivWrapper>
			</StyledContainer>
		</MainLayout>
	);
};

export default NotFound;

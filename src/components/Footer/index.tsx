import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineSkype,
} from 'react-icons/ai';

import {
	StyledContainer,
	StyledLinkContainer,
	StyledHeading,
	StyledLinkRow,
	StyledUnorderedLink,
	StyledLink,
	StyledSocialContainer,
	StyledSocialHeading,
	StyledSocialLink,
} from './style';
import { Line } from '../';

const Footer = () => {
	return (
		<StyledContainer>
			<StyledLinkContainer>
				<StyledLinkRow>
					<StyledHeading>Support</StyledHeading>
					<StyledUnorderedLink>
						<StyledLink>Help Center</StyledLink>
						<StyledLink>AirCover</StyledLink>
						<StyledLink>Safety information</StyledLink>
						<StyledLink>Supporting people with disabilities</StyledLink>
						<StyledLink>Cancellation options</StyledLink>
						<StyledLink>Cancellation options</StyledLink>
						<StyledLink>Our COVID-19 Response</StyledLink>
						<StyledLink>Report a neighborhood concern</StyledLink>
					</StyledUnorderedLink>
				</StyledLinkRow>
				<StyledLinkRow>
					<StyledHeading>Community</StyledHeading>
					<StyledUnorderedLink>
						<StyledLink>Airbnb.org: disaster relief housing</StyledLink>
						<StyledLink>Support Afghan refugees</StyledLink>
						<StyledLink>Combating discrimination</StyledLink>
					</StyledUnorderedLink>
				</StyledLinkRow>
				<StyledLinkRow>
					<StyledHeading>Hosting</StyledHeading>
					<StyledUnorderedLink>
						<StyledLink>Try hosting</StyledLink>
						<StyledLink>AirCover for Hosts</StyledLink>
						<StyledLink>Explore hosting resources</StyledLink>
						<StyledLink>Visit our community forum</StyledLink>
						<StyledLink>How to host responsibly</StyledLink>
					</StyledUnorderedLink>
				</StyledLinkRow>
				<StyledLinkRow>
					<StyledHeading>Airbnb</StyledHeading>
					<StyledUnorderedLink>
						<StyledLink>Newsroom</StyledLink>
						<StyledLink>Learn about new features</StyledLink>
						<StyledLink>Letter from our founders</StyledLink>
						<StyledLink>Careers</StyledLink>
						<StyledLink>Investors</StyledLink>
						<StyledLink>Gift cards</StyledLink>
					</StyledUnorderedLink>
				</StyledLinkRow>
			</StyledLinkContainer>
			<Line />
			<StyledSocialContainer>
				<StyledSocialHeading>
					&copy; {new Date().getFullYear()} Airbnb,Inc &middot; Privacy &middot;
					Terms &middot; Sitemap
				</StyledSocialHeading>
				<StyledSocialHeading>
					<StyledSocialLink href='https://github.com/NgTuanLoc'>
						<AiOutlineFacebook />
					</StyledSocialLink>
					<StyledSocialLink href='https://github.com/NgTuanLoc'>
						<AiOutlineTwitter />
					</StyledSocialLink>
					<StyledSocialLink href='https://github.com/NgTuanLoc'>
						<AiOutlineInstagram />
					</StyledSocialLink>
					<StyledSocialLink href='https://github.com/NgTuanLoc'>
						<AiOutlineSkype />
					</StyledSocialLink>
				</StyledSocialHeading>
			</StyledSocialContainer>
		</StyledContainer>
	);
};

export default Footer;

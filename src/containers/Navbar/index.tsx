import logo from '../../images/logo.svg';
import { Search, UserModalNav } from '../../components';
import {
	StyledContainer,
	StyledImage,
	StyledLogo,
	StyledNavbar,
} from './style';

export interface INavbar {
	hideSearch?: boolean;
}

const Navbar = ({ hideSearch }: INavbar) => {
	return (
		<StyledContainer>
			<StyledNavbar>
				<StyledLogo to='/'>
					<StyledImage src={logo} alt='airbnb logo' />
				</StyledLogo>
				<Search hideSearch={hideSearch} />
				<UserModalNav />
			</StyledNavbar>
		</StyledContainer>
	);
};

export default Navbar;

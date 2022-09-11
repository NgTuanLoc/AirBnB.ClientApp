import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import { Search, UserModalNav } from '../../components';
import { StyledContainer, StyledImage } from './style';

export interface INavbar {
	hideSearch?: boolean;
}

const Navbar = ({ hideSearch }: INavbar) => {
	return (
		<StyledContainer>
			<Logo to='/'>
				<StyledImage src={logo} alt='airbnb logo' />
			</Logo>
			<Search hideSearch={hideSearch} />
			<UserModalNav />
		</StyledContainer>
	);
};

const Logo = styled(Link)`
	grid-area: logo;
`;

export default Navbar;

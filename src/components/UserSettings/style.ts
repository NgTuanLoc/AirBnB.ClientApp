import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledContainer = styled.div`
	position: absolute;
	top: 4.5rem;
	left: 0;
	border-radius: var(--radius);
	width: 100%;
	background-color: white;
	box-shadow: var(--box-shadow);
	display: flex;
	flex-direction: column;
	margin: 0.2rem 0;
`;

const StyledButton = styled.a<{ bold?: boolean }>`
	width: 100%;
	color: black;
	font-size: 2rem;
	font-weight: 300;
	padding: 0.5rem 1rem;
	transition: var(--transition);
	text-align: left;
	font-weight: ${(props) => (props.bold ? '450' : '300')};
	cursor: pointer;

	:hover {
		background-color: #f7f7f7;
	}
`;
const StyledLink = styled(Link)<{ bold?: string }>`
	width: 100%;
	color: black;
	font-size: 2rem;
	font-weight: 300;
	width: 100%;
	padding: 0.5rem 1rem;
	transition: var(--transition);
	text-align: left;
	font-weight: ${(props) => props.bold || '300'};

	:hover {
		background-color: #f7f7f7;
	}
`;

export { StyledContainer, StyledButton, StyledLink };

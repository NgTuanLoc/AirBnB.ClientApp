import { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
	fullWidth?: boolean;
	bgColor?: string;
	children: ReactNode;
	onClickHandler?: any;
}

const Button = ({ children, fullWidth, bgColor, onClickHandler }: IButton) => {
	return (
		<Container
			onClick={onClickHandler}
			bgColor={bgColor}
			type='submit'
			fullWidth={fullWidth}>
			<h4>{children}</h4>
		</Container>
	);
};

interface Props {
	fullWidth?: boolean;
	bgColor?: string;
}

const Container = styled.button<Props>`
	width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
	position: relative;
	color: white;
	font-size: 2rem;
	border-radius: var(--radius);
	padding: 1rem;
	background: ${(props) =>
		props.bgColor ? props.bgColor : 'var(--clr-gradient)'};
	transition: var(--transition);

	h4 {
		position: relative;
		z-index: 10;
		margin: 0;
		cursor: pointer;
	}

	::after {
		content: '';
		border-radius: var(--radius);
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: var(--clr-radial);
		opacity: 0;
		transition: var(--transition);
	}

	:hover {
		::after {
			opacity: 1;
		}
	}
`;

export default Button;

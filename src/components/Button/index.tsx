import { ReactNode } from 'react';
import { StyledContainer, StyledHeading } from './style';

interface IButton {
	fullWidth?: boolean;
	bgColor?: string;
	children: ReactNode;
	onClickHandler?: any;
}

const Button = ({ children, fullWidth, bgColor, onClickHandler }: IButton) => {
	return (
		<StyledContainer
			onClick={onClickHandler}
			bgColor={bgColor}
			type='submit'
			fullWidth={fullWidth}>
			<StyledHeading>{children}</StyledHeading>
		</StyledContainer>
	);
};

export default Button;

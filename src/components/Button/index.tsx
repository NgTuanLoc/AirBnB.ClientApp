import { ReactNode } from 'react';
import { StyledContainer, StyledHeading } from './style';

interface IButton {
	fullWidth?: boolean;
	bgColor?: string;
	children: ReactNode;
	onClickHandler?: any;
	type?: 'submit' | 'button';
}

const Button = ({
	children,
	fullWidth,
	bgColor,
	onClickHandler,
	type,
}: IButton) => {
	return (
		<StyledContainer
			onClick={onClickHandler}
			bgColor={bgColor}
			type={type ? type : 'button'}
			fullWidth={fullWidth}>
			<StyledHeading>{children}</StyledHeading>
		</StyledContainer>
	);
};

export default Button;

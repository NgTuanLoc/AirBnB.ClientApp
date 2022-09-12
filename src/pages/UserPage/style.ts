import styled from 'styled-components';

const StyledContainer = styled.section`
	display: grid;
	grid-template-columns: 40rem 1fr;
	grid-gap: 5rem;
	padding: 5rem 0;

	svg {
		color: var(--clr-success);
	}
`;

const StyledImageContainer = styled.img`
	border-radius: 50%;
	height: 15rem;
	width: 15rem;
	margin-bottom: 1rem;
`;

const StyledUserInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: var(--radius);
	border: 1px solid #dddddd;
	padding: 1rem;
`;

const StyledUserDetailContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;

const StyledDivWrapper = styled.div``;

const StyledButton = styled.button`
	font-size: 2.5rem;
	border: 1px solid gray;
	padding: 0.5rem 1.5rem;
	margin: 1rem 0;
	border-radius: var(--radius);
`;

// const StyledIcon = styled.

// Typography
const StyledLargeHeading = styled.h3``;

const StyledHeading = styled.h5`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledParagraph = styled.p``;

const StyledListContainer = styled.ul``;

const StyledListItem = styled.li`
	font-size: 2rem;
`;

export {
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
};

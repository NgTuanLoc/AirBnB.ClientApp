import styled from 'styled-components';

const StyledContainer = styled.div`
	@media only screen and (max-width: 992px) {
		padding-inline: var(--padding-inline-small-device);
	}
`;

const StyledUserContainer = styled.div`
	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr 1fr;
	margin-bottom: 3rem;
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* IE 10+ */

	::-webkit-scrollbar {
		background: transparent; /* Chrome/Safari/Webkit */
		width: 0px;
	}

	@media only screen and (max-width: 992px) {
		display: flex;
		align-items: center;
		overflow-x: scroll;
	}
`;

const StyledModalHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 2rem;

	@media only screen and (max-width: 992px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const StyledDivWrapper = styled.div`
	max-width: 100rem;
`;

const StyledModalContentContainer = styled.div`
	display: grid;
	grid-template-columns: 35rem 1fr;
	column-gap: 2rem;
	padding: 2rem 0;
	height: 50rem;

	@media only screen and (max-width: 992px) {
		grid-template-columns: 1fr;
		overflow: scroll;
	}
`;

const StyledReviewContainer = styled.div`
	height: 100%;
	overflow: scroll;
`;

const StyledSearchContainer = styled.div`
	display: grid;
	grid-template-columns: 3rem 1fr;
	padding: 0.5rem 0.75rem;
	width: calc(100% - 37rem);
	border-radius: 100px;
	background-color: rgb(247, 247, 247);
	border: 2px solid black;

	@media only screen and (max-width: 992px) {
		width: 100%;
	}
`;

const StyledSearch = styled.input`
	border: none;
	background-color: transparent;
	outline: none;
	font-size: 1.8rem;
`;

const StyledShowMoreButton = styled.button`
	border-radius: var(--radius);
	border-width: 1px;
	border-style: solid;
	transition: box-shadow 0.2s ease, transform 0.1s ease;
	border-color: #222222;
	background: white;
	padding: 13px 23px;
	text-align: center;
	font-weight: 600;
	font-size: 1.6rem;
	line-height: 2rem;
	outline: none;
	color: #222222;
	max-width: 20rem;
	touch-action: manipulation;

	:hover {
		border-color: black;
		background: #f7f7f7;
	}
	@media only screen and (max-width: 992px) {
		width: 100%;
		max-width: 100%;
	}
`;

// Typography
const StyledHeading = styled.h4`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 1rem;
`;

export {
	StyledContainer,
	StyledUserContainer,
	StyledModalHeader,
	StyledSearchContainer,
	StyledSearch,
	StyledModalContentContainer,
	StyledReviewContainer,
	StyledDivWrapper,
	StyledHeading,
	StyledShowMoreButton,
};

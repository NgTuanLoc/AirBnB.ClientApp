import { StyledContainer } from './style';

interface IReview {
	avatar: string;
	name: string;
	review: string;
	created_at: string;
}

const Review = ({ avatar, name, review, created_at }: IReview) => {
	return <StyledContainer></StyledContainer>;
};

export default Review;

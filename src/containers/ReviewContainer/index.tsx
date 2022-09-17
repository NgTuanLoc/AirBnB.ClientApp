import { AiFillStar } from 'react-icons/ai';

import { Line, ProgressBar, Review } from '../../components';
import { USER_REVIEW } from '../../constant';
import {
	StyledContainer,
	StyledEvaluateContainer,
	StyledEvaluateItem,
	StyledUserContainer,
	StyledHeading,
	StyledLightHeading,
} from './style';

const ReviewContainer = () => {
	return (
		<StyledContainer>
			<Line />
			<StyledHeading>
				<AiFillStar />
				5.0 - 10 reviews
			</StyledHeading>
			<StyledEvaluateContainer>
				<StyledEvaluateItem>
					<StyledLightHeading>Cleanliness</StyledLightHeading>
					<ProgressBar bgColor='black' completed={0.95} />
				</StyledEvaluateItem>
				<StyledEvaluateItem>
					<StyledLightHeading>Communication</StyledLightHeading>
					<ProgressBar bgColor='black' completed={0.9} />
				</StyledEvaluateItem>
				<StyledEvaluateItem>
					<StyledLightHeading>Check-in</StyledLightHeading>
					<ProgressBar bgColor='black' completed={0.9} />
				</StyledEvaluateItem>
				<StyledEvaluateItem>
					<StyledLightHeading>Accuracy</StyledLightHeading>
					<ProgressBar bgColor='black' completed={0.9} />
				</StyledEvaluateItem>
				<StyledEvaluateItem>
					<StyledLightHeading>Location</StyledLightHeading>
					<ProgressBar bgColor='black' completed={0.9} />
				</StyledEvaluateItem>
				<StyledEvaluateItem>
					<StyledLightHeading>Value</StyledLightHeading>
					<ProgressBar bgColor='black' completed={0.9} />
				</StyledEvaluateItem>
			</StyledEvaluateContainer>
			<StyledUserContainer>
				{USER_REVIEW.map((user) => {
					return <Review key={user.id} {...user} />;
				})}
			</StyledUserContainer>
			<Line />
		</StyledContainer>
	);
};

export default ReviewContainer;

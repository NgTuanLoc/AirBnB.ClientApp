import { ProgressBar } from '../';
import {
	StyledContainer,
	StyledEvaluateItem,
	StyledLightHeading,
} from './styled';

interface IReviewEvaluate {
	hide?: boolean;
	gridColumn?: boolean;
}

const ReviewEvaluate = ({ hide, gridColumn }: IReviewEvaluate) => {
	return (
		<StyledContainer gridColumn={gridColumn} hide={hide}>
			<StyledEvaluateItem>
				<StyledLightHeading>Cleanliness</StyledLightHeading>
				<ProgressBar bgColor='black' completed={0.8} />
			</StyledEvaluateItem>
			<StyledEvaluateItem>
				<StyledLightHeading>Communication</StyledLightHeading>
				<ProgressBar bgColor='black' completed={0.8} />
			</StyledEvaluateItem>
			<StyledEvaluateItem>
				<StyledLightHeading>Check-in</StyledLightHeading>
				<ProgressBar bgColor='black' completed={0.95} />
			</StyledEvaluateItem>
			<StyledEvaluateItem>
				<StyledLightHeading>Accuracy</StyledLightHeading>
				<ProgressBar bgColor='black' completed={0.8} />
			</StyledEvaluateItem>
			<StyledEvaluateItem>
				<StyledLightHeading>Location</StyledLightHeading>
				<ProgressBar bgColor='black' completed={0.9} />
			</StyledEvaluateItem>
			<StyledEvaluateItem>
				<StyledLightHeading>Value</StyledLightHeading>
				<ProgressBar bgColor='black' completed={0.85} />
			</StyledEvaluateItem>
		</StyledContainer>
	);
};

export default ReviewEvaluate;

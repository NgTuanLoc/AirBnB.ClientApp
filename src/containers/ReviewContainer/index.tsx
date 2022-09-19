import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AiFillStar } from 'react-icons/ai';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { Line, Loading, ProgressBar, Review } from '../../components';
import { getReviewListByRoomId } from '../../features/Rating/ratingThunk';
import { DEFAULT_IMAGE } from '../../constant';
import { USER_REVIEW } from '../../constant';
import {
	StyledContainer,
	StyledEvaluateContainer,
	StyledEvaluateItem,
	StyledUserContainer,
	StyledHeading,
	StyledLightHeading,
} from './style';

interface IReviewContainer {
	roomId?: string;
}

const ReviewContainer = ({ roomId }: IReviewContainer) => {
	const dispatch = useAppDispatch();
	const { isLoading, ratingList } = useAppSelector((store) => store.rating);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});

	const mappedRatingList = ratingList.map((item) => {
		const { _id, userId, content, created_at } = item;
		let userAvatar = DEFAULT_IMAGE;
		let name = 'Unknown';
		if (userId) {
			userAvatar = userId.avatar ? userId.avatar : DEFAULT_IMAGE;
			name = userId.name;
		}

		const user = {
			id: _id,
			avatar: userAvatar,
			name,
			review: content,
			created_at,
		};
		return user;
	});

	useEffect(() => {
		dispatch(getReviewListByRoomId(roomId as string));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [roomId]);

	if (isLoading) {
		return (
			<StyledContainer>
				<Loading />
			</StyledContainer>
		);
	}

	return (
		<StyledContainer>
			<Line />
			<StyledHeading>
				<AiFillStar />
				5.0 - 10 reviews
			</StyledHeading>
			<StyledEvaluateContainer hide={isMobileDevice}>
				<StyledEvaluateItem>
					<StyledLightHeading>Cleanliness</StyledLightHeading>
					<ProgressBar bgColor='black' completed={0.95} />
				</StyledEvaluateItem>
				<StyledEvaluateItem>
					<StyledLightHeading>Communication</StyledLightHeading>
					<ProgressBar bgColor='black' completed={0.8} />
				</StyledEvaluateItem>
				<StyledEvaluateItem>
					<StyledLightHeading>Check-in</StyledLightHeading>
					<ProgressBar bgColor='black' completed={0.75} />
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
			</StyledEvaluateContainer>
			<StyledUserContainer>
				{[...USER_REVIEW, ...mappedRatingList].map((item) => {
					const { id, avatar, name, review, created_at } = item;
					const user = { avatar, name, review, created_at };
					return <Review key={id} {...user} />;
				})}
			</StyledUserContainer>
			<Line />
		</StyledContainer>
	);
};

export default ReviewContainer;

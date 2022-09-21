import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AiFillStar } from 'react-icons/ai';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { Line, Review, ReviewEvaluate } from '../../components';
import { Modal } from '../../layouts';
import { getReviewListByRoomId } from '../../features/Rating/ratingThunk';
import { USER_REVIEW, DEFAULT_IMAGE } from '../../constant';
import {
	StyledContainer,
	StyledUserContainer,
	StyledModalHeader,
	StyledModalContentContainer,
	StyledReviewContainer,
	StyledDivWrapper,
	StyledShowMoreButton,
	StyledHeading,
} from './style';

interface IReviewContainer {
	roomId?: string;
}

const ReviewContainer = ({ roomId }: IReviewContainer) => {
	const dispatch = useAppDispatch();
	const { ratingList } = useAppSelector((store) => store.rating);
	const isMobileDevice = useMediaQuery({
		query: '(max-width: 992px)',
	});
	const [isModalOpen, setIsModalOpen] = useState(true);

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

	const userReviews = [...USER_REVIEW, ...mappedRatingList];

	return (
		<StyledContainer>
			<Modal
				fullHeight={false}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}>
				<StyledModalHeader>
					<StyledHeading>
						<AiFillStar />
						5.0 - {userReviews.length} reviews
					</StyledHeading>
					<StyledHeading>
						<AiFillStar />
						5.0 - {userReviews.length} reviews
					</StyledHeading>
				</StyledModalHeader>
				{isMobileDevice ? (
					<StyledModalContentContainer>
						<ReviewEvaluate />
						{userReviews.map((item) => {
							const { id, avatar, name, review, created_at } = item;
							const user = { avatar, name, review, created_at };
							return <Review key={id} {...user} />;
						})}
					</StyledModalContentContainer>
				) : (
					<StyledModalContentContainer>
						<StyledDivWrapper>
							<ReviewEvaluate gridColumn />
						</StyledDivWrapper>
						<StyledReviewContainer>
							{userReviews.map((item) => {
								const { id, avatar, name, review, created_at } = item;
								const user = { avatar, name, review, created_at };
								return <Review key={id} {...user} />;
							})}
						</StyledReviewContainer>
					</StyledModalContentContainer>
				)}
			</Modal>
			<Line />
			<ReviewEvaluate hide={isMobileDevice} />
			<StyledHeading>
				<AiFillStar />
				5.0 - {userReviews.length} reviews
			</StyledHeading>

			<StyledUserContainer>
				{userReviews.slice(0, 6).map((item) => {
					const { id, avatar, name, review, created_at } = item;
					const user = { avatar, name, review, created_at };
					return <Review key={id} {...user} />;
				})}
			</StyledUserContainer>
			{userReviews.length > 6 && (
				<StyledShowMoreButton onClick={() => setIsModalOpen(!isModalOpen)}>
					Show all {userReviews.length} reviews
				</StyledShowMoreButton>
			)}
			<Line />
		</StyledContainer>
	);
};

export default ReviewContainer;

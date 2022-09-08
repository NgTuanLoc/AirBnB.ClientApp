import { RingLoader } from 'react-spinners';
import { StyledContainer } from './style';

const Loading = () => {
	return (
		<StyledContainer>
			<RingLoader color='#ff385c' size={70} />
		</StyledContainer>
	);
};

export default Loading;

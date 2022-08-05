import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Footer } from '../components';

const NotFound = () => {
	return (
		<Container>
			<div className='not-found'>
				<div className='not-found__info '>
					<h1>Oops!</h1>
					<h2>We can't seem to find the page you're looking for.</h2>
					<h4>Error code: 404</h4>
					<p>Here are some helpful links instead :</p>
					<div className='not-found__links'>
						<Link to='/'>Home</Link>
						<a href='https://github.com/NgTuanLoc'>Search</a>
						<a href='https://github.com/NgTuanLoc'>Help</a>
						<a href='https://github.com/NgTuanLoc'>Traveling on Airbnb</a>
						<a href='https://github.com/NgTuanLoc'>Hosting on Airbnb</a>
						<a href='https://github.com/NgTuanLoc'>Trust & Safety</a>
					</div>
				</div>
				<div className='not-found__image flex-center'>
					<img
						src='https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif'
						alt='Girl has dropped her ice cream.'
					/>
				</div>
			</div>
			<Footer />
		</Container>
	);
};

const Container = styled.section`
	.not-found {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 5rem;
	}

	.not-found__image {
		img {
			width: auto;
			height: auto;
		}
	}

	.not-found__info {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;

		h1 {
			font-size: 7rem;
			color: #484848;
			margin-bottom: 2rem;
		}

		h2 {
			color: #484848;
			font-weight: 350;
			margin-bottom: 1.5rem;
		}

		p {
			font-size: 1.5rem;
		}

		h4 {
			font-weight: 300;
			color: #767676;
		}

		.not-found__links {
			justify-content: center;
			align-items: flex-start;
			flex-direction: column;
			display: flex;

			a {
				color: #26969a;
				font-size: 2rem;
				transition: var(--transition);

				:hover {
					text-decoration: underline;
				}
			}
		}
	}

	@media only screen and (max-width: 992px) {
		.not-found {
			grid-template-columns: 1fr;
		}

		.not-found {
			padding: 2rem;
		}
		.not-found__image {
			display: none;
		}
	}
`;

export default NotFound;

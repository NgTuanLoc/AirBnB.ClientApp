import styled from 'styled-components';
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineSkype,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<Container>
			<div className='links'>
				<div className='link'>
					<h3>Support</h3>
					<ul>
						<li>Help Center</li>
						<li>AirCover</li>
						<li>Safety information</li>
						<li>Supporting people with disabilities</li>
						<li>Cancellation options</li>
						<li>Cancellation options</li>
						<li>Our COVID-19 Response</li>
						<li>Report a neighborhood concern</li>
					</ul>
				</div>
				<div className='link'>
					<h3>Community</h3>
					<ul>
						<li>Airbnb.org: disaster relief housing</li>
						<li>Support Afghan refugees</li>
						<li>Combating discrimination</li>
					</ul>
				</div>
				<div className='link'>
					<h3>Hosting</h3>
					<ul>
						<li>Try hosting</li>
						<li>AirCover for Hosts</li>
						<li>Explore hosting resources</li>
						<li>Visit our community forum</li>
						<li>How to host responsibly</li>
					</ul>
				</div>
				<div className='link'>
					<h3>Airbnb</h3>
					<ul>
						<li>Newsroom</li>
						<li>Learn about new features</li>
						<li>Letter from our founders</li>
						<li>Careers</li>
						<li>Investors</li>
						<li>Gift cards</li>
					</ul>
				</div>
			</div>
			<div className='line'></div>
			<div className='social'>
				<h4>
					&copy; {new Date().getFullYear()} Airbnb,Inc &middot; Privacy &middot;
					Terms &middot; Sitemap
				</h4>
				<h4>
					<a href='https://github.com/NgTuanLoc'>
						<AiOutlineFacebook />
					</a>
					<a href='https://github.com/NgTuanLoc'>
						<AiOutlineTwitter />
					</a>
					<a href='https://github.com/NgTuanLoc'>
						<AiOutlineInstagram />
					</a>
					<a href='https://github.com/NgTuanLoc'>
						<AiOutlineSkype />
					</a>
				</h4>
			</div>
		</Container>
	);
};

const Container = styled.footer`
	display: block;
	background-color: #f7f7f7;
	width: 100%;
	padding: 2rem 8rem;

	.links {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 3rem;
		background-color: transparent;

		li {
			margin: 0.5rem auto;
			text-transform: capitalize;
			font-size: 1.5rem;
			cursor: pointer;
		}
	}

	.line {
		height: 1px;
		width: 100%;
		background-color: #dddddd;
		margin: 3rem auto;
	}

	.social {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h4 {
			font-size: 1.5rem;
			font-weight: 300;
		}

		a {
			font-size: 2.5rem;
			margin-inline: 0.5rem;
			transition: var(--transition);
			color: black;

			:hover:nth-child(1) {
				color: #1877f2;
			}
			:hover:nth-child(2) {
				color: #1da1f2;
			}
			:hover:nth-child(3) {
				color: #e4405f;
			}
			:hover:nth-child(4) {
				color: #0a66c2;
			}
		}
	}

	@media only screen and (max-width: 992px) {
		padding-inline: 1rem;
		.links {
			grid-template-columns: 1fr;
		}
		.social {
			flex-direction: column;

			h4 {
				margin-bottom: 1rem;
			}
		}
	}
`;

export default Footer;

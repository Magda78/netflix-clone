import React, { useState, useEffect } from 'react';
import './LoginScreen.css';
import SignInScreen from './SignInScreen';
import Question from '../Question';
import questionsData from '../questions.json';

function LoginScreen() {
	const [ signIn, setSignIn ] = useState(false);

	const loginButtonHandler = () => {
		setSignIn(true);
	};

	return (
		<div className="loginScreen">
			<div className="loginScreen__background">
				<img
					className="loginScreen__logo"
					src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
					alt=""
				/>
				<button className="loginScreen__button" onClick={loginButtonHandler}>
					Sign In
				</button>
				<div className="loginScreen__gradient" />
				<div className="loginScreen__body">
					{signIn ? (
						<SignInScreen />
					) : (
						<React.Fragment>
							<h1>Unlimited files, TV programmes and more.</h1>
							<h2>Watch anywhere. Cancel at any time.</h2>
							<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
							<div className="loginScreen__input">
								<form>
									<input type="email" placeholder="E-mail address" />
									<button className="loginScreen__getStarted" onClick={loginButtonHandler}>
										GET STARTED
									</button>
								</form>
							</div>
						</React.Fragment>
					)}
				</div>
			</div>
			<div className="loginScreen__options">
				<div className="loginScreen__option1">
					<div className="loginScreen__option1__info">
						<h1>Enjoy on your TV.</h1>
						<h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
					</div>
					<div className="loginScreen__option1__pic">
						<img
							className="loginScreen__option1__picSize"
							src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
							alt=""
						/>
						<video autoPlay loop muted playsinline className="loginScreen_option1_video">
							<source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
						</video>
					</div>
				</div>

				<div className="loginScreen__option2">
					<div className="loginScreen__option2__pic">
						<img
							className="loginScreen__option2__picSize"
							src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
							alt=""
						/>
					</div>
					<div className="loginScreen__option2__info">
						<h1>Download your shows to watch offline.</h1>
						<h2>Save your favorites easily and always have something to watch.</h2>
					</div>
				</div>

				<div className="loginScreen__option3">
					<div className="loginScreen__option3__info">
						<h1>Watch everywhere.</h1>
						<h2>
							Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying
							more.
						</h2>
					</div>
					<div className="loginScreen__option3__pic">
						<img
							className="loginScreen__option3__picSize"
							src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
							alt=""
						/>
						<video autoPlay loop muted playsinline className="loginScreen_option3_video">
							<source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" />
						</video>
					</div>
				</div>
			</div>
			<div className="loginScreen__questions">
				<h1>Frequently Asked Questions</h1>
				<div className="loginScreen__questionsContents">
					{questionsData.map((item) => <Question item={item} />)}
				</div>
			</div>
			<div className="loginScreen__footer">
				<h4>
					Questions? <span className="loginScreen__footerPhone">Call 1-844-505-2993</span>
				</h4>
				<div className="loginScreen__footerSections">
					<div className="loginscreen__footerSection">
						<h5>FAQ</h5>
						<h5>Investor Relations</h5>
						<h5>Ways to Watch</h5>
						<h5>Corporate Information</h5>
						<h5>Netflix Originals</h5>
					</div>
					<div className="loginscreen__footerSection">
						<h5>Help Center</h5>
						<h5>Jobs</h5>
						<h5>Terms of Use</h5>
						<h5>Contact Us</h5>
					</div>
					<div className="loginscreen__footerSection">
						<h5>Account</h5>
						<h5>Redeem Gift Cards</h5>
						<h5>Privacy</h5>
						<h5>Speed Test</h5>
					</div>
					<div className="loginscreen__footerSection">
						<h5>Media Center</h5>
						<h5>Buy Gift Cards</h5>
						<h5>Cookie Preferences</h5>
						<h5>Legal Notices</h5>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;

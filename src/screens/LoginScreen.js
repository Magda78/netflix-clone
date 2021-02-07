import React, { useState } from 'react';
import './LoginScreen.css';
import SignInScreen from './SignInScreen';

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
		</div>
	);
}

export default LoginScreen;

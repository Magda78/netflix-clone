import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignInScreen.css';

function SignInScreen() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		auth
			.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
		e.preventDefault();
	};

	const signIn = (e) => {
        auth
			.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
		e.preventDefault();
	};

	return (
		<div className="signInScreen">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} placeholder="E-mail" type="email" />
				<input ref={passwordRef} placeholder="Password" type="password" />
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className="signInScreen_grey">New to Netflix?</span>
					<span className="signInScreen__link" onClick={register}>
						Sign up now.
					</span>
				</h4>
			</form>
		</div>
	);
}

export default SignInScreen;

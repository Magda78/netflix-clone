import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';

function ProfileScreen() {
	const user = useSelector(selectUser);
	return (
		<div className="profileScreen">
			<Nav />
			<div className="profileScreen__body">
				<h1>Edit Profile</h1>
				<div className="profileScreen__info">
					<img
						src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
						alt=""
					/>
					<div className="profileScreen__details">
						<h2>{user.email}</h2>
						<div className="profileScreen__plans">
                            <h3>
                                Plans
                            </h3>
                            <p></p>
							<button onClick={() => auth.signOut()} className="profileScreen__signOut">
								SignOut
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
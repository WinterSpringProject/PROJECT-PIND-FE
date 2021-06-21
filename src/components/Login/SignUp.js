import React from 'react';
import './SignUp.scss'

const SignUp = () => {
	return (
		<div>
			<div className = "SignUp-template">
				<div>
				<input className = "SignUp-email"
									type="text"
									name="email"
									placeholder="  Email"
									autoComplete="username"
									//value={loginForm.email}
									//onChange={onChangeLogin}
									/>
				<input className = "SignUp-pwd"
									type="password"
									name="pwd"
									placeholder="  Password"
									autoComplete="current-password"
									id = "password"
									//value={loginForm.pwd}
									//onChange={onChangeLogin}
									/>
				<input className = "SignUp-pwd"
									type="password"
									name="pwd"
									placeholder="  Password check"
									autoComplete="current-password"
									id = "password"
									//value={loginForm.pwd}
									//onChange={onChangeLogin}
									/>
				<button className = "SignUp-button">완료</button>
				</div>
			</div>
		</div>
	);
};

export default SignUp;

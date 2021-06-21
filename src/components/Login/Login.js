import './Login.scss'
import axios from 'axios';
import React, {useState} from 'react';
import { SERVER_IP } from '../../constants/serverInfo';

const Login = () => {

	const [accessToken, setAccessToken] = useState(null)
	const [loginForm, setLoginForm] = useState(
		{
			email: "",
			pwd: ""
		}
	)
	//const SERVER_IP2 = 'http://127.0.0.1:8080';

	const onChangeLogin = e => {
		const {value, name} = e.target;
		setLoginForm({
			...loginForm,
			[name]: value
		})
	}

	const handleClick = async () => {
		await axios.post(`${SERVER_IP}/api/login`, loginForm, { withCredentials: true })
		.then((response) => {
			setAccessToken(response.headers.authorization);
			console.log(response);
		})
		.catch(error => {
			console.log(error);
		})
	}

	return (
		<div>
			<div className = "Login-template">
				<div>
					<input className = "Login-email"
								type="text"
								name="email"
								placeholder="  Email"
								autoComplete="username"
								value={loginForm.email}
								onChange={onChangeLogin}/>
					<input className = "Login-pwd"
								type="password"
								name="pwd"
								placeholder="  Password"
								autoComplete="current-password"
								id = "password"
								value={loginForm.pwd}
								onChange={onChangeLogin}/>
					<button className="Login-button" onClick={handleClick}>로그인</button>
				</div>
			</div>
			{console.log(accessToken)}
		</div>
	);
};

export default Login;

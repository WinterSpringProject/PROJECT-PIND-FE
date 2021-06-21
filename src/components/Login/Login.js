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

	const setCookie = (cookie_name, value, days) => {
		let exdate = new Date();
		exdate.setDate(exdate.getDate() + days);
		let cookie_value = escape(value) + ((days == null) ? '' : '; expires=' + exdate.toUTCString());
		document.cookie = cookie_name + '=' + cookie_value;
	}

	const onChangeLogin = e => {
		const {value, name} = e.target;
		setLoginForm({
			...loginForm,
			[name]: value
		})
	}

	//const getCookie = (cookie_name) => {
	//	let x, y;
	//	let val = document.cookie.split(';');

	//	for (var i = 0; i < val.length; i++) {
	//		x = val[i].substr(0, val[i].indexOf('='));
	//		y = val[i].substr(val[i].indexOf('=') + 1);
	//		x = x.replace(/^\s+|\s+$/g, '');
	//		if (x === cookie_name) {
	//			return unescape(y);
	//		}
	//	}
	//}

	const handleClick = async () => {
		await axios.post(`${SERVER_IP}/api/login`, loginForm, { withCredentials: true })
		.then((response) => {
			setAccessToken(response.headers.authorization);
			setCookie('auth', accessToken, '7');
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
		</div>
	);
};

export default Login;

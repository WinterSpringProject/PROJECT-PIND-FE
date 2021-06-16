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
			setAccessToken(response);
			console.log(response.headers);
		})
		.catch(error => {
			console.log(error);
		})
	}

	return (
		<div>
			<input type="text" name="email" placeholder="Email" value={loginForm.email} onChange={onChangeLogin}/>
			<input type="text" name="pwd" placeholder="Password" value={loginForm.pwd} onChange={onChangeLogin}/>
			<button onClick={handleClick}>로그인</button>
			{console.log("obj: ", loginForm)}
		</div>
	);
};

export default Login;

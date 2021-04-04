import React, { useState } from 'react';
import axios from 'axios';

const InfoList = () => {
	const [data, setData] = useState(null);
	const onClick = async () => {
		axios.get('https://cors-anywhere.herokuapp.com/http://52.78.169.232:8080/project/list').then(response => {
			setData(response.data);
		});
	};

	return (
		<div>
			<div>
				<button onClick = {onClick}>불러오기</button>
			</div>
			{data && <textarea rows = {7} value = {JSON.stringify(data, null, 2)} readOnly = {true} />}
		</div>
	);
};

export default InfoList;

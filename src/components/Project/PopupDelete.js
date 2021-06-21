import React from 'react';
import axios from 'axios';
import './PopupDelete.scss'

export const getCookie = (cookie_name) => {
	let x, y;
	let val = document.cookie.split(';');

	for (var i = 0; i < val.length; i++) {
		x = val[i].substr(0, val[i].indexOf('='));
		y = val[i].substr(val[i].indexOf('=') + 1);
		x = x.replace(/^\s+|\s+$/g, '');
		if (x === cookie_name) {
			return unescape(y);
		}
	}
}


const PopupDelete = (props) => {
	const url = props.url;
	const { onClose } = props;
	const auth = getCookie('auth');
	const authHeader = {
		headers: { Authorization: `Baerer ${auth}` }
	}

	const onDelete = async () => {
		try {
			await axios.delete(url, authHeader);
			window.location = '/';
		}
		catch (e) {console.log(e);}
	}

	return (
		<div className="PopupBackground">
			<div className="PopupDelete">
				<div>프로젝트를 삭제 하겠습니까?</div>
				<div>
					<button onClick={onDelete}>확인</button>
					<button onClick={() => {onClose(false)}}>취소</button>
				</div>
			</div>
		</div>
	);
};

export default PopupDelete;

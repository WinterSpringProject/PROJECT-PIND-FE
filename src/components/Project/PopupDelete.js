import React from 'react';
import axios from 'axios';
import './PopupDelete.scss'

const PopupDelete = (props) => {
	const url = props.url
	const { onClose } = props

	const onDelete = async () => {
		try {
			await axios.delete(url);
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

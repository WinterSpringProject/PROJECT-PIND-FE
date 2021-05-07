import React from 'react';
import { Link } from 'react-router-dom';

const NewProject = () => {
	return (
		<div>
			<Link to="/newproject"><button>새 프로젝트</button></Link>
		</div>
	);
};

export default NewProject;

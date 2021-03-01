import React from 'react';
import './CardViewTemplate.scss';

const CardViewTemplate = ( { children } ) => {
	return (
		<div>
			<div className="CardViewTemplate-wrapper">{children}</div>
		</div>
	);
};

export default CardViewTemplate;

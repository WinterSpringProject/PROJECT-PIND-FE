import React from 'react';
import TopViewItem from './TopViewItem';

const TopViewList = ( {TopViewData} ) => {
	return (
		<div className = "list-align">
			{ TopViewData.map(topViewList => (
				<TopViewItem	topViewList = { topViewList }
											key = { topViewList.name } />
			)) }
		</div>
	);
};

export default TopViewList;
